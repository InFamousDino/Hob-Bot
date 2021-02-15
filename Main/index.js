const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.commands = new Map()
client.config = require('./config.json')

require(`./functions`)(client)
require('./command')(client)

client.on('ready', async () => {
    console.log('Hob is activated!')
})

client.login(config.token)

