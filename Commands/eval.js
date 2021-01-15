const { Channel } = require('discord.js')
const command = require('./command')
const ownerId = '584297317432164366'
const DevRole = '799475984947478538'

module.exports = client => {
    command(client, 'eval', message => {
        const { member, content, role } = message

        if (member.id === ownerId) {
            const result = eval(content.replace(';eval ', ''))
            message.channel.send(result)
        } else {
        }

       // if (message.member.roles.has(DevRole.id)) {
       //     const result = eval(content.replace(';eval ', ''))
       //     message.channel.send(result)
      //  } else {
      //  }
    })
}