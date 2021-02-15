const command = require('../command')

module.exports = client =>{
    command(client, 'monke', message =>{
        message.channel.send(':monkey:')
    })
}