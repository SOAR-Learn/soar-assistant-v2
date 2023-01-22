const { Client, Intents, MessageEmbed, Permissions, MessageActionRow, Message, MessageButton } = require('discord.js')

module.exports = {
    category: 'Commands',
    description: 'shows this message',
    slash: 'both',
    guildOnly: false,
    testOnly: false,

    callback: async ({ message, interaction: msgInt, channel }) => {
        const help = new MessageEmbed()
        .setColor('#ADD8E6')
        .setAuthor('soar assistant v2')
        .setDescription(
        '`help` - shows this message' + '\n'
        + '`add` - add study sessions to the calendar' + '\n'
        + '`sessions` - show session schedule' + '\n'
        + '`prefix` - shows bot prefix' + '\n'
        + '`invite` - invite people to the server' + '\n'
        + '`suggest` - suggest a feature' + '\n'
        + '`report` - report a problem' + '\n'
        + '`search` - search our resources' + '\n'
        + '`profile` - check study profile' + '\n'
        + '`resources` - useful third-party resources' + '\n')
        .setTimestamp()

        if (message) {
            await message.reply({
                embeds: [help],
            })
            return
        }
    
        await msgInt.reply({
            embeds: [help],
        })
    }
}