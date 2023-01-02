const Discord = require('discord.js')
const ms = require('ms')

module.exports = async (client, discord, member) => {
    client.on('voiceStateUpdate', async (oldState, newState) => {

        const NEW_CHANNEL_ID = newState.channelId
        const OLD_CHANNEL_ID = oldState.channelId
        const { guild } = oldState

        const CATEGORY = guild.channels.cache.find(c => c.name === 'STUDYING' && c.type === 'GUILD_CATEGORY')
        
        var member = newState.member
        if (member.user.bot) return

        var VOICE_CHANNEL = member.voice.channel

        var displayName = guild.members.cache.get(member.id).displayName

        var PRIVATE_STUDY = guild.channels.cache.find(r => r.name === 'Private Study')
        var DUO_STUDY = guild.channels.cache.find(r => r.name === 'Duo Study')
        var MAIN_STUDY = guild.channels.cache.find(r => r.name === 'Main Study 1')
        var MAIN_STUDY_2 = guild.channels.cache.find(r => r.name === 'Main Study 2')

        var PRIVATE_USER_STUDY = guild.channels.cache.find(r => r.name === 'Private Study: ' + displayName)
        var DUO_USER_STUDY = guild.channels.cache.find(r => r.name === 'Duo Study: ' + displayName)

        let VOICE_CHANNEL_NAME
        if (VOICE_CHANNEL) VOICE_CHANNEL_NAME = VOICE_CHANNEL.name

        if (NEW_CHANNEL_ID === OLD_CHANNEL_ID) {
            console.log(NEW_CHANNEL_ID)
            console.log(OLD_CHANNEL_ID)
        }

        if (NEW_CHANNEL_ID === MAIN_STUDY.id || NEW_CHANNEL_ID === MAIN_STUDY_2.id) {
            console.log(displayName + ' has joined MAIN STUDY')

            if (PRIVATE_USER_STUDY) PRIVATE_USER_STUDY.delete()
            if (DUO_USER_STUDY) DUO_USER_STUDY.delete()
        }

        if (NEW_CHANNEL_ID === PRIVATE_STUDY.id) {
            console.log(displayName + ' has joined PRIVATE STUDY')
            
            if (PRIVATE_USER_STUDY) PRIVATE_USER_STUDY.delete()
            if (DUO_USER_STUDY) DUO_USER_STUDY.delete()

            const name = 'Private Study: ' + displayName
    
            guild.channels.create(name, {
                type: 'GUILD_VOICE'
            })
            .then((channel) => {
                const categoryId = CATEGORY.id
                channel.setParent(categoryId)
                channel.setUserLimit(1)
            })
            
            setTimeout(function() {
                const studyID = guild.channels.cache.find(c => c.name === 'Private Study: ' + displayName);
    
                if (studyID) {
                member.voice.setChannel(studyID)
                .then(() => console.log(`Moved ${displayName} to ${studyID}`))
                .catch(console.error);
                }
            }, ms('1.75s'))
            return
        }

        if (NEW_CHANNEL_ID === DUO_STUDY.id) {
            console.log(displayName + ' has joined DUO STUDY')

            if (PRIVATE_USER_STUDY) PRIVATE_USER_STUDY.delete()
            if (DUO_USER_STUDY) DUO_USER_STUDY.delete()

            const name = 'Duo Study: ' + displayName
    
            guild.channels.create(name, {
                type: 'GUILD_VOICE'
            })
            .then((channel) => {
                const categoryId = CATEGORY.id
                channel.setParent(categoryId)
                channel.setUserLimit(2)
            })
            
            setTimeout(function() {
                const studyID = guild.channels.cache.find(c => c.name === 'Duo Study: ' + displayName);
    
                if (studyID) {
                member.voice.setChannel(studyID)
                .then(() => console.log(`Moved ${displayName} to ${studyID}`))
                .catch(console.error);
                }
            }, ms('1.75s'))
            return
        }

        if (!NEW_CHANNEL_ID) {            
            if (PRIVATE_USER_STUDY) PRIVATE_USER_STUDY.delete()
            if (DUO_USER_STUDY) DUO_USER_STUDY.delete()
        }
    })
}