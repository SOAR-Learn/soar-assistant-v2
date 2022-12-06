const { Client, Intents, MessageEmbed, Permissions, MessageActionRow, Message, MessageButton } = require('discord.js')

module.exports = {
    category: 'Commands',
    description: 'test command',
    slash: 'both',
    guildOnly: true,
    testOnly: true,

    callback: async ({ message, interaction: msgInt, channel }) => {
        const embed = new MessageEmbed()
        .setColor('#ADD8E6')
        .setAuthor('soar assistant v2')
        .setDescription(
        'embed' + '\n'
        )
        .setTimestamp()

        if (message) {
            await message.reply({
                content: '`/cmd`',
            })
            return
        }
        
        await msgInt.reply({
            embeds: [embed],
        })
    }
}