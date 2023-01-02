const Discord = require('discord.js')
const ms = require('ms')
const ref = require('../index.js').firebaseRef

module.exports = async (client, discord, member) => {

    client.on('voiceStateUpdate', async (oldState, newState) => {
        const NEW_CHANNEL_ID = newState.channelId
        const OLD_CHANNEL_ID = oldState.channelId
        const { guild } = oldState
        var displayName = guild.members.cache.get(member.id).displayName
    
        var PRIVATE_STUDY = guild.channels.cache.find(r => r.name === 'Private Study')
        var DUO_STUDY = guild.channels.cache.find(r => r.name === 'Duo Study')
        var MAIN_STUDY = guild.channels.cache.find(r => r.name === 'Main Study 1')
        var MAIN_STUDY_2 = guild.channels.cache.find(r => r.name === 'Main Study 2')

        var PRIVATE = guild.channels.cache.find(r => r.name === 'Private Study: ' + displayName)
        var DUO = guild.channels.cache.find(r => r.name === 'Duo Study: ' + displayName)
    
        if (!PRIVATE_STUDY || !DUO_STUDY || !MAIN_STUDY || !MAIN_STUDY_2) return
        
        var member = newState.member
        if (member.user.bot) return
    
        var VOICE_CHANNEL = member.voice.channel
    
        const args = displayName.split(/ +/)
    
        let users = []
        
        ref.orderByChild('first').equalTo(args[0]).once('value', snapshot => {
            if (snapshot.exists()) {
                users.push(snapshot.exportVal())
            }
        }).then(() => {
        var userFound = false
        var databaseId = null
        for (var i = 0; i < users.length; i++) {
            for (j in users[i]) {
                
                if (users[i][j].last === args[1]) {
                    console.log(users[i][j].last)
                    console.log(users[i])
                    console.log('----------')
                    console.log(users[i][j])
                    
                    for (const title in users[i]) {
                        if (users[i].hasOwnProperty(title) && !userFound) {
                           const user = users[i][title]
                            if (user.last === args[1]) {
                                databaseId = title
                                userFound = true
                            }
                        }
                    }
    
                    console.log(databaseId)
                }
                if (users[i][j].userId) {
                    const childRef = ref.child(databaseId)

                    if (NEW_CHANNEL_ID !== PRIVATE.id && NEW_CHANNEL_ID !== DUO.id && NEW_CHANNEL_ID !== MAIN_STUDY.id || NEW_CHANNEL_ID !== MAIN_STUDY_2.id) {
                        childRef.update({
                            voiceChannel: false
                        })

                        return
                    }

                    else {
                        childRef.update({
                            voiceChannel: true
                        })
                    }

                    break
                }
                else {
                    const newChildRef = ref.push()
    
                    if (VOICE_CHANNEL) bool = true
                    else bool = false
    
                    if (users[i][j].last === args[1]) {
                        newChildRef.set({
                            bylaws: users[i][j].bylaws,
                            cheating: users[i][j].cheating,
                            classroom: users[i][j].classroom,
                            done: users[i][j].done,
                            email: users[i][j].email,
                            first: users[i][j].first,
                            grade: users[i][j].grade,
                            id: users[i][j].id,
                            last: users[i][j].last,
                            voted: users[i][j].voted,
                            userId: member.id,
                            studyTime: 0,
                            voiceChannel: bool,
                            currency: 0
                        })
    
                        const childRef = ref.child(databaseId)
                        childRef.remove()
                    }
                }
            }
        }
            if (userFound !== true) {
                console.log(`User not found: ${member.id}`)
            }
        })
    })
}