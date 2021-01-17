const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

const eval = require('../Main/Bot_Developer_Commands/eval')
const mute = require('../Main/Administrative_Commands/mute')
const server = require('../Main/Other/server')
const prefix = require('./Administrative_Commands/prefix')
const owo = require('./Fun Commands/owo')
const serverlist = require('./Fun Commands/serverlist')
const help = require('./Other/help')
const support = require('./Other/support-link')
const purge = require('./Administrative_Commands/purge')
const say = require('./Fun Commands/say')
const editstatus = require('./Bot_Developer_Commands/editstatus')
const kick = require('./Administrative_Commands/kick')
const ban = require('./Administrative_Commands/ban')
const shutdown = require('./Bot_Developer_Commands/shutdown')


const command = require('./command')

client.on('ready', () => {
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
    //say(client)
    shutdown(client)
    //prefix(client)
})

client.login(config.token)
