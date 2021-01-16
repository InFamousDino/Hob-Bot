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


const command = require('./command')

client.on('ready', () => {
    console.log('Client is ready!')

    mute(client)
    eval(client)
    help(client)
    support(client)
    owo(client)
    serverlist(client)
    purge(client)

    //prefix(client)

    command(client, 'editstatus', message => {
        const content = message.content.replace(';editstatus ', '')
        if (message.member.hasPermission('ADMINISTRATOR')) {
        client.user.setPresence({
            activity: {
                name: content,
                type: 0
            }
        })
        }
    })

    command(client, 'kick', message => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if (
            member.hasPermission('ADMINISTRATOR') || member.hasPermission('KICK_MEMBERS')) {
                const target = mentions.users.first()
                const reason = message.content.replace(';kick ', ' ')
                
                if (target) {
                    const targetMember = message.guild.members.cache.get(target.id)
                    

                    targetMember.kick({reason})
                    message.channel.send(`${tag} The user was kicked successfully.`)
                } else {
                    message.channel.send(`${tag}Please mention a valid user to kick.`)

                }
            } 
            else {
                message.channel.send(`You do not have permission to use this command.`)
            }
        
    })

    command(client, 'ban', message => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if (
            member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBERS')) {
                const target = mentions.users.first()
                const reason = message.content.replace(';ban ', ' ')
                
                if (target) {
                    const targetMember = message.guild.members.cache.get(target.id)
                    

                    targetMember.ban({reason})
                    message.channel.send(`${tag} The user was banned successfully.`)
                } else {
                    message.channel.send(`${tag}Please mention a valid user to ban.`)

                }
            } 
            else {
                message.channel.send(`You do not have permission to use this command.`)
            }
        
    })
})

client.login(config.token)
