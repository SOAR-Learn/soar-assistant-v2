const { Client, Intents, MessageEmbed, Permissions, MessageActionRow, Message, MessageButton } = require('discord.js')
const ref = require('../index.js').firebaseRef

module.exports = {
    category: 'Commands',
    description: 'check study profile',
    slash: 'both',
    guildOnly: false,
    testOnly: false,

    callback: async ({ message, interaction: msgInt, channel }) => {

        var time
        var currency

        if (message) {
            ref.orderByChild('userId').equalTo(`${message.author.id}`).once('value').then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const childData = childSnapshot.val()

                    let displayName = message.guild.members.cache.get(message.author.id).displayName

                    time = childData.studyTime
                    currency = childData.currency

                    const embed = new MessageEmbed()
                    .setColor('#ADD8E6')
                    .setAuthor('soar assistant v2')
                    .setDescription(
                    `**${displayName}'s profile**` + '\n\n'
                    + `**Study time:** ${(time / 60).toFixed(2)} hours` + '\n'
                    + `**SOAR bucks:** ${currency.toFixed(0)}`
                    )
                    .setTimestamp()
                    
                    message.reply({
                        embeds: [embed],
                    })
                    return
                })
            })
        }
        else return
    }
}