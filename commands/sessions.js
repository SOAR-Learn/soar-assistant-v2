const { Client, Intents, MessageEmbed, Permissions, MessageActionRow, Message, MessageButton, Collector } = require('discord.js')
const sessionRef = require('../index.js').sessionRef

module.exports = {
    category: 'Commands',
    description: 'show session schedule',
    slash: 'both',
    guildOnly: false,
    testOnly: false,

    callback: async ({ message, args, interaction }) => {
        if (interaction) {
            var list = []

            sessionRef.orderByChild('date').once('value').then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const childData = childSnapshot.val()

                    if (childData.date !== '00/00/0000' && childData.guildId === interaction.guild.id) {
                        list.push(`\n${childData.date} - ${childData.subject} - ${childData.time}`)
                    }
                })

                if (list == []) return interaction.reply({
                    content: 'There are no sessions scheduled.'
                })

                const embed = new MessageEmbed()
                .setColor('#ADD8E6')
                .setAuthor('soar assistant v2')
                .setDescription(
                    `${list}`
                )
                .setTimestamp()

                interaction.reply({
                    embeds: [embed]
                })
                return
            })
        }
        else return
    }
}
