const { Client, Intents, MessageEmbed, Permissions, MessageActionRow, Message, MessageButton, Collector } = require('discord.js')
const sessionRef = require('../index.js').sessionRef

module.exports = {
    category: 'Commands',
    description: 'add study sessions to the calendar',
    slash: 'both',
    guildOnly: false,
    testOnly: false,
    expectedArgs: '<class> <date> <time>',
    minArgs: 3,
    maxArgs: 3,

    callback: async ({ message, args, interaction }) => {
        if (interaction) {
            const newChildRef = sessionRef.push()

            console.log(interaction.guild.id)

            newChildRef.set({
                date: args[1],
                id: interaction.user.id,
                subject: args[0],
                time: args[2],
                guildId: interaction.guild.id
            })
            
            await interaction.reply({
                content: 'Event added! Check the calendar with `/sessions`.',
            })
            return
        }
        else return
    }
}

