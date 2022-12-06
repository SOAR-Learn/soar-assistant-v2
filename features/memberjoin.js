const Discord = require('discord.js')
const ms = require('ms')

module.exports = async (client, discord, member) => {
    client.on('guildMemberAdd', guildMember => {
        setTimeout(function() {
            let memberCount = guildMember.guild.memberCount;
    
            const channel = guildMember.guild.channels.cache.find(c => c.name === 'verification');
    
            channel.send(`Welcome to SOAR, <@${guildMember.user.id}>! You are our **${memberCount}** member. Please log in to the SOAR Portal at https://soarlearn.org and enter your full name in this channel.`);
        }, ms('2s'))
    });
}
