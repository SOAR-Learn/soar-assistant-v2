const { Client, Intents, MessageEmbed, Permissions, MessageActionRow, Message, MessageButton } = require('discord.js')

module.exports = {
    category: 'Commands',
    description: 'test command',
    slash: 'both',
    guildOnly: true,
    testOnly: true,

    callback: ({ message, interaction }) => {
        if (message) {
            message.reply({
                content: '`/cmd`',
            })
            return
        }

        interaction.reply({
            content: '',
        })
    }
}
