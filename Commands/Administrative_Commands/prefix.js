const command = require('../command.js')
const { prefix } = require('../config.json')

module.exports = (client) => {
    command(client, 'prefix', message => {
        const { member } = message
        const PermRequired = 'MANAGE_SERVER'
        const content = message.content.replace(`${prefix}prefix`, '')

        if (message.member.hasPermission(PermRequired)) {
            
        } else {
            message.channel.send('You do not have the required permission to run this command: ' + PermRequired)
        }
    })
}
