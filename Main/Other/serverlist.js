const command = require('../command')

module.exports = client => {
command(client, ['ServerList', 'serverlist'], (message) => {
    client.guilds.cache.forEach((guild) => {
        message.channel.send(`${guild.name} has a total of ${guild.memberCount} members.`)
    })
})
}