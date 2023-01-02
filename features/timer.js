const Discord = require('discord.js')
const ms = require('ms')
const ref = require('../index.js').firebaseRef

module.exports = async (client, discord, member) => {
    setInterval(async function() {
        ref.orderByChild('voiceChannel').equalTo(true).once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
              const childRef = childSnapshot.ref
              const childData = childSnapshot.val()

              let time = childData.studyTime + 1
              console.log(time)

              childRef.update({
                studyTime: time
              })
            })
          })
    }, ms('1m'))
}