const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

const mongo = require('./src/mongo')

client.commands = new Map()
client.aliases = new Map()

client.config = require('./config.json')

require(`./functions`)(client)
require('./command')(client)

client.on('ready', async () => {
    console.log('Hob is activated!')

    setInterval(() => { 
        client.destroy()
        client.login(config.token)
      }, 3600000); 

      await mongo().then(mongoose => {
        try {
          console.log('Mongo Connected')
        } finally {
          mongoose.connection.close()
        }

      })
})

client.login(config.token)

