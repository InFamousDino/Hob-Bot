const command = require('../command')

module.exports = client => {
command(client, ['owo', 'OwO'], (message) => {
    message.channel.send('OwO!')
})
}