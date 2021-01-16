const command = require('../command')

module.exports = client => {
command(client, 'support', message => {
    message.channel.send('Join the Hob support server here: https://discord.gg/NKEzt7Cd3q')
})
}