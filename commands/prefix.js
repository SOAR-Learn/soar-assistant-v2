const { Client, Intents, MessageEmbed, Permissions, MessageActionRow, Message, MessageButton } = require('discord.js')

module.exports = {
    category: 'Commands',
    description: 'check out the bot prefix',
    slash: 'both',
    guildOnly: false,
    testOnly: false,

    callback: ({ message, interaction }) => {
        if (message) {
            message.reply({
                content: 'Prefix: -',
            })
            return
        }

        interaction.reply({
            content: 'Prefix: -',
        })
    }
}
