const command = require('../command')
const { prefix } = require('../config.json')

module.exports = client => {
    command(client, 'say', message => {
        const { content } = message

        const result = message.content.replace(`${prefix}say `, '')

            message.channel.send(`\`${result}\``)
    })
}