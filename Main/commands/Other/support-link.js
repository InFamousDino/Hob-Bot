const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    message.channel.send('Join the Hob support server here: https://discord.gg/NKEzt7Cd3q')
}
exports.config = {
    disabled: false, // if the command is disabled
    permission: [], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: false, // if you can use commands in only guilds or also dms
    hobDevOnly: false, // If you want only hob devs can use
    aliases: []
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `Support for Hob`,
    usage: `${filename}` 
}