const command = require('../command.json')

module.exports = client => {
    command(client, 'say', message => {
        const { content } = message

        const result = message.content.replace(';say', '')

            message.channel.send(result)
    })
}