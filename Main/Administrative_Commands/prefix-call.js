const command = require('../command')
const { prefix } = require('../config.json')

module.exports = client => {
    command(client, 'prefix', message => {
        message.channel.send('My current prefix is: ' + prefix)
    })
}