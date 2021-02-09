const command = require('../command')
const { prefix } = require('../config.json')

module.exports = client => {
    command(client, 'kick', message => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if ( member.hasPermission('ADMINISTRATOR') || member.hasPermission('KICK_MEMBERS')) {
                const target = mentions.users.first()
                const reason = message.content.replace(`${prefix}kick `, ' ')
                
                if (target) {
                    const targetMember = message.guild.members.cache.get(target.id)
                    

                    targetMember.kick({reason})
                    message.channel.send(`${tag} The user was kicked successfully.`)
                } else {
                    message.channel.send(`${tag} Please mention a valid user to kick.`)

                }
            } 
            else {
                message.channel.send(`You do not have permission to use this command.`)
            }
        
    })
}