const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    message.channel.send(`bro ${message.author} is super sus!! https://cdn.discordapp.com/attachments/457512825649365003/812661343668666428/video0-36.mp4`)
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
    description: `amogus`,
    usage: `${filename}` 
}