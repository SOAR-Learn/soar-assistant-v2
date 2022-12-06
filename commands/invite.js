const { Client, Intents, MessageEmbed, Permissions } = require('discord.js')

module.exports = {
    category: 'Commands',
    description: 'create a server invite',
    slash: 'both',
    guildOnly: false,
    testOnly: false,
    
    callback: ({ message, interaction }) => {
        if (message) {
            message.channel.createInvite()
            .then(invite => {
                message.reply({
                    content: 'discord.gg/' + invite.code,
                })
            })
            .catch(console.error)
            return
        }

        interaction.channel.createInvite()
        .then(invite => {
            interaction.reply({
                content: 'discord.gg/' + invite.code,
            })
        })
        .catch(console.error)
    }
}