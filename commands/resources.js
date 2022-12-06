const { Client, Intents, MessageEmbed, Permissions, MessageActionRow, Message, MessageButton } = require('discord.js')

module.exports = {
    category: 'Commands',
    description: 'third party resources',
    slash: 'both',
    guildOnly: false,
    testOnly: false,

    callback: async ({ message, interaction: msgInt, channel }) => {
        const resources = new MessageEmbed()
        .setColor('#ADD8E6')
        .setAuthor('soar assistant v2')
        .setDescription(
        '[Beyond the Five](https://beyondthefive.org/courses)\n'
        + '[College Board](https://www.collegeboard.org/)\n'
        + '[ExtraIQ](https://www.extraiq.org/)\n'
        + '[Fiveable](https://fiveable.me/)\n'
        + '[Khan Academy](https://www.khanacademy.org/)\n'
        + '[OpenStax](https://openstax.org/)\n'
        + '[School Simplified](https://schoolsimplified.org/)\n'
        + '[Simple Studies](https://simplestudies.edublogs.org/)\n'
        + '[Study Together!](https://studytogether.com/)\n')
        .setTimestamp()

        if (message) {
            await message.reply({
                embeds: [resources],
            })
            return
        }
    
        await msgInt.reply({
            embeds: [resources],
        })
    }
}