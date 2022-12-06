const { Client, Intents, MessageEmbed, Permissions, MessageActionRow, Message, MessageButton, Collector } = require('discord.js')

module.exports = {
    category: 'Commands',
    description: 'test command',
    slash: 'both',
    guildOnly: true,
    testOnly: true,
    expectedArgs: '<args1> [args2]',
    minArgs: 1,
    maxArgs: 2,

    callback: async ({ message, args, interaction }) => {
        if (message) {
            await message.reply({
                content: '`/cmd <args1> [args2]`',
            })
            return
        }
        
        
    }
}

