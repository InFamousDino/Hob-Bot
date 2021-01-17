const command = require('../command')
const developerIds = '584297317432164366'

module.exports = client => {
    command(client, 'editstatus', message => {
        const content = message.content.replace(';editstatus ', '')
        const { member } = message
        
        if (member.id === developerIds) {
            client.user.setPresence({
                activity: {
                    name: content,
                    type: 0
                }
            })

            message.channel.send('Sucessfully set my status to ' + content + '.')
        } else {
            message.channel.send('You need to be a Hob Developer to use this command.')
        }
    })
}
