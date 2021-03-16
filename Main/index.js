const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

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
})

client.login(config.token)

