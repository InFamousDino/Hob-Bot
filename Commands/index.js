const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const eval = require('./eval')
const mute = require('./mute')

const command = require('./command')

client.on('ready', () => {
    console.log('Client is ready!')

    mute(client)
    eval(client)

    command(client, ['owo', 'OwO'], (message) => {
        message.channel.send('OwO!')
    })

    command(client, ['ServerList', 'serverlist'], (message) => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(`${guild.name} has a total of ${guild.memberCount} members.`)
        })
    })

    command(client, 'purge', message => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        }
    })

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

    //command(client, 'ping', message => {

    //})

    command(client, 'help', message => {
        const embed = new Discord.MessageEmbed()

        .setTitle('Hob Bot Commands')
        .setAuthor('Hob Bot')
        .setFooter('Hob Commands')
        .setColor('#00AAFF')
        .addFields({
            name: 'Fun Commands',
            value: ';owo.',
            inline: true
        },
        {
            name: 'Moderation Commands',
            value: 'Kick [user, reason], Ban [user, reason], Unban [user]. ',
            inline: true

        },
        {
            name: 'System Commands',
            value: 'help, permlevel, ping',
            inline: true

        },
        )

        message.channel.send(embed)
    })
})

client.login(config.token)
