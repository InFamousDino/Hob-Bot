const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('Client is ready!')

    command(client, ['ping', 'Ping', 'test'], (message) => {
        message.channel.send('owo!')
    })
})

client.login(config.token)
