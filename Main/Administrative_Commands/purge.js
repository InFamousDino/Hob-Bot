const command = require('../command')
const Perm = 'MANAGE_MESSAGES'

module.exports = client => {
    command(client, 'purge', message => {
        if (message.member.hasPermission(Perm)) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        } else {
            message.channel.send('You do not have the permission ' + Perm + ' to use this command.')
        }
    })
}