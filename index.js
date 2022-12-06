const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const ms = require('ms')


// const firebase = require('firebase-admin')

// const config = {
//     apiKey: "AIzaSyCInDSiCzj1cQWB7h1cfisxLW2nyLZNXqI",
//     authDomain: "soar-portal.firebaseapp.com",
//     databaseURL: "https://soar-portal-default-rtdb.firebaseio.com",
//     projectId: "soar-portal",
//     storageBucket: "soar-portal.appspot.com",
//     messagingSenderId: "328243213522",
//     appId: "1:328243213522:web:b97e143845709f3375290b",
//     measurementId: "G-CQ4PMWBYKC"
// }

var admin = require("firebase-admin");

var serviceAccount = require("./soar-portal-firebase-adminsdk-wmpt1-8da886742a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://soar-portal-default-rtdb.firebaseio.com/"
});

const udb = admin.database().ref("/users")

const { Client, Intents, MessageEmbed, Permissions } = DiscordJS

const client = new Client({ intents: [
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_WEBHOOKS
] })

client.on('ready', () => {
    console.log('Bot online!')

    client.user.setPresence({ status: 'dnd' })
    client.user.setActivity(('/help | soarlearn.org'), {
        type: 'WATCHING'
    })

    const wok = new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        testServers: ['929835466310701087'],
        botOwners: ['756269875961266227'],
        disabledDefaultCommands: [
            'help',
            'command',
            'language',
            'prefix',
            'requiredrole',
            'channelonly'
        ],
        ignoreBots: true
    })
    .setDefaultPrefix('-')
})

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.member.roles.cache.some(r => r.name === "Student")) return;
    let student_role = message.guild.roles.cache.find(role => role.name === 'Student');

    const channel = message.guild.channels.cache.find(c => c.name === 'verification');
    const content = message.content;

    const args = message.content.split(/ +/);
    
    if (message.channel != channel) return;

    let users = [];
    
    udb.orderByChild('first').equalTo(args[0]).once('value', snapshot => {
        if (snapshot.exists()) {
            users.push(snapshot.exportVal());
        }
    }).then(() => {
    var userFound = false;
    for (var i = 0; i < users.length; i++) {
        for (j in users[i]) {
        console.log(j);
        if (users[i][j].last == args[1]) {
            console.log(`Exists: ${users[i].last}`);
            message.channel.send('Welcome to SOAR!');
            setTimeout(function() {
                console.log(content);
                message.member.setNickname(content);
            }, ms('1s'))
            setTimeout(function() {
                console.log("Author ID: " + message.author.id);
                message.guild.members.cache.get(message.author.id).roles.add(student_role);
            }, ms('2s'))
            userFound = true;
            break;
        }}
    }
    if (userFound !== true) {
        console.log(`Failed Verification: ${message.author.tag}`);
        
        let verification_message = `The name you entered was not found in the SOAR Database. Please register as a member by visiting https://portal.soarlearn.org and try again.`
        message.channel.send(verification_message)
    }
    })
});

client.login(process.env.TOKEN)

