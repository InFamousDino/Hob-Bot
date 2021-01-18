const command = require('../command')
const config = require('../config.json')

module.exports = client => {
    command(client, 'rate', message => {
        const content = message.content.replace(`${config.prefix}rate `, '')

        if (content){
            const rating = Math.floor(Math.random() * 10) + 1;

            message.channel.send(`I rate \`${content}\` a \`${rating}/10\` `)
        } else {
            message.channel.send('Please give me something to rate.')
        }
    })
}