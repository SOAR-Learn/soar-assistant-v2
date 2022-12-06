const { Client, Intents, MessageEmbed, Permissions, MessageActionRow, Message, MessageButton, Collector } = require('discord.js')

module.exports = {
    category: 'Commands',
    description: 'create or manage a study channel',
    slash: 'both',
    guildOnly: true,
    testOnly: true,
    expectedArgs: '<action> <name> [cycles] [work] [break]',
    minArgs: 2,
    maxArgs: 5,

    callback: async ({ message, args, interaction }) => {

        if (interaction) {
            if (args[0] == 'create') {

                if (args[1].length > 16) {
                    return interaction.reply({
                        content: 'The channel name must be less than 16 characters.',
                    })
                }

                if (!args[4]) {
                    return interaction.reply({
                        content: 'Please enter a numerical value for cycles, work time, and break time.',
                        ephemeral: true,
                    })
                }

                if (isNaN(args[2]) || isNaN(args[3]) || isNaN(args[4])) {
                    return interaction.reply({
                        content: 'Please enter a numerical value for cycles, work time, and break time.',
                        ephemeral: true,
                    })
                }

                let CYCLES = args[2]
                let WORK_TIME = args[3] - (args[3] % 5)
                let BREAK_TIME = args[4] - (args[4] % 5)

                if (CYCLES > 8 || WORK_TIME > 120 || BREAK_TIME > 60 || CYCLES < 1 || WORK_TIME < 5 || BREAK_TIME < 5) {
                    return interaction.reply({
                        content: 'The values you entered are out of range!' + '\n' + 'Max Cycles: 8 / Max Work: 120 / Max Break: 60',
                        ephemeral: true,
                    })
                }

                const CHANNEL_NAME = `${WORK_TIME}m work / ${args[1]}`

                let CATEGORY_NAME = interaction.guild.channels.cache.find(
                    (c) => c.name === 'STUDYING' && c.type === 'GUILD_CATEGORY')

                    if (!CATEGORY_NAME) {
                        interaction.guild.channels.create("STUDYING", {
                            type: 'GUILD_CATEGORY'
                        }).then(category => {
                            console.log(category)
        
                            interaction.guild.channels.create("dashboard", {
                                type: 'GUILD_TEXT'
                            }).then(channel => {
                                console.log(channel)
            
                                channel.setParent(category)
                            })
        
                            interaction.guild.channels.create(CHANNEL_NAME, {
                                type: 'GUILD_VOICE'
                            }).then(channel => {
                                console.log(channel)
            
                                channel.setParent(category)
            
                                interaction.reply({
                                    content: `Channel successfully created! Join <#${channel.id}> to start studying.`,
                                })
                            })
                        })
                    }

                    else {
                        interaction.guild.channels.create(CHANNEL_NAME, {
                            type: 'GUILD_VOICE'
                        }).then(channel => {
                            console.log(channel)
        
                            channel.setParent(CATEGORY_NAME)
        
                            interaction.reply({
                                content: `Channel successfully created! Join <#${channel.id}> to start studying.`,
                            })
                        })
                    }

                // add database functions
            }

            else if (args[0] == 'delete') {
                const CHANNEL_ID = args[1]

                if (isNaN(CHANNEL_ID)) return interaction.reply({
                    content: 'Please replace the name field with the channel id.',
                })

                let CHANNEL = interaction.guild.channels.cache.find((c) => c.id === CHANNEL_ID && c.type === 'GUILD_VOICE')

                if (!CHANNEL) return interaction.reply({
                    content: 'This voice channel does not exist.',
                })

                else if (!CHANNEL.parent || CHANNEL.parent.name != 'STUDYING') {
                    return interaction.reply({
                        content: 'This is not a study channel.',
                    })
                }

                else {
                    CHANNEL.delete()

                    return interaction.reply({
                        content: 'The channel was successfully deleted.',
                    })
                }
            }

            else return interaction.reply({
                content: 'Syntax: /pomodoro <create/delete> <name/id> [cycles] [work_time] [break_time]',
                ephemeral: true,
            })
        }
    }
}

