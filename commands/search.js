const { Client, Intents, MessageEmbed, Permissions, MessageActionRow, Message, MessageButton } = require('discord.js')

module.exports = {
    category: 'Commands',
    description: 'search for specific resources',
    slash: 'both',
    guildOnly: false,
    testOnly: false,
    expectedArgs: '<subject>',
    minArgs: 1,
    maxArgs: 1,
    permissions: ['ADMINISTRATOR'],

    callback: async ({ message, args, interaction: msgInt, channel }) => {

        // SUPPORTED SUBJECTS
        const supported = new MessageEmbed()
        .setColor('#ADD8E6')
        .setAuthor('soar assistant v2')
        .setDescription(
        '**Supported IDs:**\n\n'
        + '`IH_BIOLOGY`\n'
        + '`IH_CHEMISTRY`\n'
        + '`IB_BIOLOGY`\n'
        + '`AP_BIOLOGY`\n'
        + '`IB_ECONOMICS`\n'
        + '`APUSH`\n'
        + '`WHAP`\n'
        + '`HGAP`\n'
        )
        .setTimestamp()

        // IH BIOLOGY

        let IH_BIOLOGY_2 = 'https://docs.google.com/presentation/d/1sLHgUu7MwhCPqTEV-s-wcsu4H1wyIMzUaYGubfdwWyE/edit?usp=sharing'
        let IH_BIOLOGY_4 = 'https://docs.google.com/presentation/d/13z33_hWMxeJQfB8ntWBE3oshXs8vUq5yQQ4tMETIvaw/edit?usp=sharing'
        let IH_BIOLOGY_5 = 'https://drive.google.com/file/d/1K2fhjSvN1yOyfSos3eSlZAPrhB2GeUKC/view?usp=sharing'
        let IH_BIOLOGY_6 = 'https://drive.google.com/file/d/15O5qRgLnOAGxCxWBoOS_5044joBczkIC/view?usp=sharing'
        let IH_BIOLOGY_8 = 'https://drive.google.com/file/d/19yEVI3O33TZ8QWblw-FT8Vgjk5ea2r4p/view?usp=sharing'

        const IH_BIOLOGY = new MessageEmbed()
        .setColor('#ADD8E6')
        .setAuthor('soar assistant v2')
        .setDescription(
        '**IH Biology**\n\n'
        + `[Unit 2](${IH_BIOLOGY_2})\n`
        + `[Unit 4](${IH_BIOLOGY_4})\n`
        + `[Unit 5](${IH_BIOLOGY_5})\n`
        + `[Unit 6](${IH_BIOLOGY_6})\n`
        + `[Unit 8](${IH_BIOLOGY_8})\n`
        )
        .setTimestamp()

        // IH CHEMISTRY

        let IH_CHEMISTRY_4 = 'https://docs.google.com/presentation/d/1D4mF3gGnBsu-1tT8moxQFdz0uqTQUr3tTxFNbJ9fzoM/edit?usp=sharing'
        let IH_CHEMISTRY_5 = 'https://docs.google.com/presentation/d/19dGhlR4CThI4oZhzU8D25qM5DEHY4lbr1auh-_GPeZY/edit?usp=sharing'
        let IH_CHEMISTRY_6 = 'https://docs.google.com/presentation/d/1faHW_qal9F6-mNFx2_A_TVZkd63jPUBLw3dFV1lVF_c/edit?usp=sharing'
        let IH_CHEMISTRY_8 = 'https://docs.google.com/presentation/d/1H2gRu3o8B2P13Y_rLbCKXfWvcvY0HOqdE45UXIwNVOc/edit?usp=sharing'
        let IH_CHEMISTRY_9 = 'https://docs.google.com/presentation/d/1Ys3EEgsPXLgoq4vxHQWBn_0evfe4bqsLG6n8y7S9MPM/edit?usp=sharing'
        let IH_CHEMISTRY_11 = 'https://docs.google.com/presentation/d/1_pEs4NVLty2Ec31KclRppG67gohDGDd_dR7TZlksXQA/edit?usp=sharing'
        let IH_CHEMISTRY_12 = 'https://docs.google.com/presentation/d/1soNr_-vuCZ3onkR2m6pYmqFp6YEh4qPyv5_HL-cxND8/edit?usp=sharing'
        let IH_CHEMISTRY_13 = 'https://docs.google.com/presentation/d/1HT0yBrVvCOzmPyeC-_W7_DsdZnX3q0lMrNwbzbWvs5E/edit?usp=sharing'
        let IH_CHEMISTRY_14 = 'https://docs.google.com/presentation/d/1nDV-DW5Sz2GnHIqc03BBAO8eNtmNZ-A7g01b7Ziuajk/edit?usp=sharing'

        const IH_CHEMISTRY = new MessageEmbed()
        .setColor('#ADD8E6')
        .setAuthor('soar assistant v2')
        .setDescription(
        '**IH Chemistry**\n\n'
        + `[Unit 4](${IH_CHEMISTRY_4})\n`
        + `[Unit 5](${IH_CHEMISTRY_5})\n`
        + `[Unit 6](${IH_CHEMISTRY_6})\n`
        + `[Unit 8](${IH_CHEMISTRY_8})\n`
        + `[Unit 9](${IH_CHEMISTRY_9})\n`
        + `[Unit 11](${IH_CHEMISTRY_11})\n`
        + `[Unit 12](${IH_CHEMISTRY_12})\n`
        + `[Unit 13](${IH_CHEMISTRY_13})\n`
        + `[Unit 14](${IH_CHEMISTRY_14})\n`
        )
        .setTimestamp()

        // IB BIOLOGY

        let IB_BIOLOGY_PHOTOSYNTHESIS = 'https://docs.google.com/presentation/d/1Ye7bG6TqzoU5ipR7dIj1wCJf07W2ha3for7q3EVxpBg/edit?usp=sharing'

        const IB_BIOLOGY = new MessageEmbed()
        .setColor('#ADD8E6')
        .setAuthor('soar assistant v2')
        .setDescription(
        '**IB Biology**\n\n'
        + `[Photosynthesis](${IB_BIOLOGY_PHOTOSYNTHESIS})\n`
        )
        .setTimestamp()

        // AP BIOLOGY

        let AP_BIOLOGY_2 = 'https://docs.google.com/presentation/d/1-mquXhVK7cTcdy53tAfKGGthiOJL6yCQ88WR0O39D-8/edit?usp=sharing'
        let AP_BIOLOGY_3 = 'https://docs.google.com/presentation/d/1HFgXLUsJ6i7P0f9sgZSZVdwxfBX7vPxhrmNBPKZmvH8/edit?usp=sharing'
        let AP_BIOLOGY_4 = 'https://docs.google.com/presentation/d/10KQjUAu_CoQhWSRIWgMN7BRXJugKkonKtfpWW0XH-TQ/edit?usp=sharing'
        let AP_BIOLOGY_5 = 'https://docs.google.com/presentation/d/1Xx2_BjG2YwC2HUHghBn6zRWeC2vbcrvLD_1BTXqZ62M/edit?usp=sharing'
        let AP_BIOLOGY_7 = 'https://docs.google.com/presentation/d/1ofXiAx5upo7VBDj_QXjTZorVqudZ4e8qkU6SXJmr8tU/edit?usp=sharing'
        let AP_BIOLOGY_9 = 'https://docs.google.com/presentation/d/1roaHOhS8_ePq4-7VYdK0SbRZZ2A1CLiG414Bls-2mS8/edit?usp=sharing'

        const AP_BIOLOGY = new MessageEmbed()
        .setColor('#ADD8E6')
        .setAuthor('soar assistant v2')
        .setDescription(
        '**AP Biology**\n\n'
        + `[Unit 2](${AP_BIOLOGY_2})\n`
        + `[Unit 3](${AP_BIOLOGY_3})\n`
        + `[Unit 4](${AP_BIOLOGY_4})\n`
        + `[Unit 5](${AP_BIOLOGY_5})\n`
        + `[Unit 7](${AP_BIOLOGY_7})\n`
        + `[Unit 9](${AP_BIOLOGY_9})\n`
        )
        .setTimestamp()

        // IB ECONOMICS

        let IB_ECONOMICS_MARKET = 'https://docs.google.com/presentation/d/1OZST-B5n2zf85eOs_2I5YLWkxAnKjxftvm2MS1SvU8Q/edit?usp=sharing'

        const IB_ECONOMICS = new MessageEmbed()
        .setColor('#ADD8E6')
        .setAuthor('soar assistant v2')
        .setDescription(
        '**IB Economics**\n\n'
        + `[Market Interaction](${IB_ECONOMICS_MARKET})\n`
        )
        .setTimestamp()

        // APUSH

        let APUSH_3 = 'https://docs.google.com/presentation/d/1w7gliIrF5EQWhL9urgRgGpRCXIkRgrfcgp-3CEDEmtk/edit?usp=sharing'
        let APUSH_4 = 'https://docs.google.com/presentation/d/1CjhNWLMFj8B4f1A7qtbR1UpS8Z0T0ORq_0O2lx8CtQ4/edit?usp=sharing'
        let APUSH_5 = 'https://docs.google.com/presentation/d/1gjr93-9l_At3QtKyeXnJXU0MLTdd_RZlS868Z-eZaWQ/edit?usp=sharing'

        const APUSH = new MessageEmbed()
        .setColor('#ADD8E6')
        .setAuthor('soar assistant v2')
        .setDescription(
        '**APUSH**\n\n'
        + `[Unit 3](${APUSH_3})\n`
        + `[Unit 4](${APUSH_4})\n`
        + `[Unit 5](${APUSH_5})\n`
        )
        .setTimestamp()

        // WHAP

        let WHAP_3 = 'https://docs.google.com/presentation/d/1k6pZsHbQMaVNaOSPtf5XYK2_lZ9gbuHMBgyXsFoKnHE/edit?usp=sharing'
        let WHAP_4 = 'https://docs.google.com/presentation/d/17jVpVOEWZ6sbywM6Gl_PnzcEVXRHyH5x8329vUQhsCg/edit?usp=sharing'
        let WHAP_5 = 'https://docs.google.com/presentation/d/1a88PwM80_dxLJ3UNGv6Z-p3JPNovE9OYnu1imjpUHH4/edit?usp=sharing'

        const WHAP = new MessageEmbed()
        .setColor('#ADD8E6')
        .setAuthor('soar assistant v2')
        .setDescription(
        '**WHAP**\n\n'
        + `[Unit 3](${WHAP_3})\n`
        + `[Unit 4](${WHAP_4})\n`
        + `[Unit 5](${WHAP_5})\n`
        )
        .setTimestamp()

        // HGAP

        let HGAP_1 = 'https://drive.google.com/file/d/17FbEH8wXn--m_T7J6Dtxg9OcXU2lLPlR/view?usp=sharing'
        let HGAP_2 = 'https://drive.google.com/file/d/1hRJ7nX39MRJS0MRggCBpNn6SB5BaFSqw/view?usp=sharing'
        let HGAP_3 = 'https://drive.google.com/file/d/1EWpYbDKrgxhV2cOHC85erCE7GRTZGn8l/view?usp=sharing'
        let HGAP_4 = 'https://drive.google.com/file/d/1EwMHEgWHPpIbpb0eKctPiIrvHU7AJB0K/view?usp=sharing'
        let HGAP_4_5 = 'https://drive.google.com/file/d/1u5cc2XpfAxFKd_pjAOq3e46VpkRjy6j8/view?usp=sharing'
        let HGAP_6_1 = 'https://drive.google.com/file/d/1VXXfVdbE_5PqDsrQk9tJIKdw9GK0Q3op/view?usp=sharing'
        let HGAP_6_2 = 'https://drive.google.com/file/d/1tzc6KsWKIdJa8uci1akSmb0PjkKXgqa4/view?usp=sharing'
        let HGAP_7 = 'https://drive.google.com/file/d/1eaNIBnOzPB2x5H_Th4HCfWHjrFsGiYSn/view?usp=sharing'

        const HGAP = new MessageEmbed()
        .setColor('#ADD8E6')
        .setAuthor('soar assistant v2')
        .setDescription(
        '**HGAP**\n\n'
        + `[Unit 1](${HGAP_1})\n`
        + `[Unit 2](${HGAP_2})\n`
        + `[Unit 3](${HGAP_3})\n`
        + `[Unit 4](${HGAP_4})\n`
        + `[Unit 4, 5](${HGAP_4_5})\n`
        + `[Unit 6](${HGAP_6_1})\n`
        + `[Unit 6](${HGAP_6_2})\n`
        + `[Unit 7](${HGAP_7})\n`
        )
        .setTimestamp()

        // SEARCH CODE

        if (message) {
            if (args[0] == 'IH_BIOLOGY') {
                await message.reply({
                    embeds: [IH_BIOLOGY],
                })
                return
            }
            if (args[0] == 'IH_CHEMISTRY') {
                await message.reply({
                    embeds: [IH_CHEMISTRY],
                })
                return
            }
             if (args[0] == 'IB_BIOLOGY') {
                await message.reply({
                    embeds: [IB_BIOLOGY],
                })
                return
            }
             if (args[0] == 'AP_BIOLOGY') {
                await message.reply({
                    embeds: [AP_BIOLOGY],
                })
                return
            }
             if (args[0] == 'IB_ECONOMICS') {
                await message.reply({
                    embeds: [IB_ECONOMICS],
                })
                return
            }
             if (args[0] == 'APUSH') {
                await message.reply({
                    embeds: [APUSH],
                })
                return
            }
             if (args[0] == 'WHAP') {
                await message.reply({
                    embeds: [WHAP],
                })
                return
            }
             if (args[0] == 'HGAP') {
                await message.reply({
                    embeds: [HGAP],
                })
                return
            }
            
            await message.reply({
                embeds: [supported],
            })
            return
        }
        
        else {
            if (args[0] == 'IH_BIOLOGY') {
                await msgInt.reply({
                    embeds: [IH_BIOLOGY],
                })
                return
            }
            if (args[0] == 'IH_CHEMISTRY') {
                await msgInt.reply({
                    embeds: [IH_CHEMISTRY],
                })
                return
            }
            if (args[0] == 'IB_BIOLOGY') {
                await msgInt.reply({
                    embeds: [IB_BIOLOGY],
                })
                return
            }
            if (args[0] == 'AP_BIOLOGY') {
                await msgInt.reply({
                    embeds: [AP_BIOLOGY],
                })
                return
            }
            if (args[0] == 'IB_ECONOMICS') {
                await msgInt.reply({
                    embeds: [IB_ECONOMICS],
                })
                return
            }
            if (args[0] == 'APUSH') {
                await msgInt.reply({
                    embeds: [APUSH],
                })
                return
            }
            if (args[0] == 'WHAP') {
                await msgInt.reply({
                    embeds: [WHAP],
                })
                return
            }
            if (args[0] == 'HGAP') {
                await msgInt.reply({
                    embeds: [HGAP],
                })
                return
            }

            await msgInt.reply({
                embeds: [supported],
            })
            return
        }
    }
}