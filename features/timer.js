const Discord = require('discord.js')
const ms = require('ms')
const ref = require('../index.js').firebaseRef

module.exports = async (client, discord, member) => {
    setInterval(async function() {
      try {
        ref.orderByChild('voiceChannel').equalTo(true).once('value').then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childRef = childSnapshot.ref
            const childData = childSnapshot.val()

            let add = (childData.currency + Math.random() * 4 + 1)

            let time = childData.studyTime + 1

            childRef.update({
              studyTime: time
            })

            childRef.update({
              currency: Math.round(add)
            })
          })
        })
      }
      catch (error) {
        console.log('voiceChannel not found')
      }
        
    }, ms('1m'))
}