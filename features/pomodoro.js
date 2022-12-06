const Discord = require('discord.js')

module.exports = async (client, discord, member) => {
    client.on('voiceStateUpdate', async (oldState, newState) => {

        const NEW_CHANNEL_ID = newState.channelID
        const OLD_CHANNEL_ID = oldState.channelID
        const { guild } = oldState;
        
        let member = newState.member;
        let VOICE_CHANNEL = member.voice.channel

        if (member.user.bot) return;

        let CATEGORY = guild.channels.cache.find(c => c.name === 'STUDYING' && c.type === 'GUILD_CATEGORY')

        if (!VOICE_CHANNEL || VOICE_CHANNEL.parent !== CATEGORY) return

        
    })
}