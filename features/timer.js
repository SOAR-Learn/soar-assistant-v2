const Discord = require('discord.js')
const ms = require('ms')
const ref = require('../index.js').firebaseRef

module.exports = async (client, discord, member) => {
    setInterval(async function() {
        ref.orderByChild('voiceChannel').equalTo(true).once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
              const childRef = childSnapshot.ref
              const childData = childSnapshot.val()

              let add = (childData.currency + Math.random() * 4 + 1).toFixed(0)

              let time = childData.studyTime + 1

              childRef.update({
                studyTime: time
              })

              childRef.update({
                currency: add
              })
            })
          })
    }, ms('1m'))
}