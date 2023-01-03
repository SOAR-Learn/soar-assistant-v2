const { Client, Intents, MessageEmbed, Permissions, MessageActionRow, Message, MessageButton, Collector } = require('discord.js')

module.exports = {
    category: 'Commands',
    description: 'report an issue',
    slash: 'both',
    guildOnly: false,
    testOnly: false,
    expectedArgs: '<text>',
    minArgs: 1,
    maxArgs: 1,

    callback: async ({ client, message, args, interaction }) => {
        if (message) {
            await message.reply({
                content: '`/report <text>`',
            })
            return
        }

        let staff = client.users.cache.find(t => t.id === '756269875961266227')

        staff.send({
            content: `Report from ${interaction.user.id}: ${args}`,
        })

        await interaction.reply({
            content: 'Your report was sucessfully recorded.',
        })
    }
}

