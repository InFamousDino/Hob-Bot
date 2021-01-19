const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

const eval = require('../Main/Bot_Developer_Commands/eval')
const mute = require('../Main/Administrative_Commands/mute')
const owo = require('./Fun Commands/owo')
const serverlist = require('./Other/serverlist')
const help = require('./Other/help')
const support = require('./Other/support-link')
const purge = require('./Administrative_Commands/purge')
const say = require('./Fun Commands/say')
const editstatus = require('./Bot_Developer_Commands/editstatus')
const kick = require('./Administrative_Commands/kick')
const ban = require('./Administrative_Commands/ban')
const shutdown = require('./Bot_Developer_Commands/shutdown')
const bot_config = require('./Administrative_Commands/bot-config')
const forg = require('./Fun Commands/forg')
const rate = require('./Fun Commands/rate')
const mongo = require('./Non-Command/mongo')
const welcome = require('./Administrative_Commands/welcome')
const current_prefix = require('./Administrative_Commands/prefix-call')
const dan_andrews = require('./Fun Commands/dan_andrews')

const command = require('./command')
const { Mongoose } = require('mongoose')

client.on('ready', async () => {
    console.log('Hob is activated!')

    //mute(client)
    eval(client)
    help(client)
    support(client)
    owo(client)
    serverlist(client)
    purge(client)
    editstatus(client)
    kick(client)
    ban(client)
    say(client)
    shutdown(client)
    forg(client)
    bot_config(client)
    rate(client)
    welcome(client)
    current_prefix(client)
    dan_andrews(client)

    await mongo().then(Mongoose => {
        try {
        console.log('Connected to our holy mongoose!!!!!')
        } finally {
            Mongoose.connection.close()
        }
    })
})

client.login(config.token)

