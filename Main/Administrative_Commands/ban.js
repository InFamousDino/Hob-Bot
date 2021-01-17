const command = require('../command')


module.exports = client => {
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
}