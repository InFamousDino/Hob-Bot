const filename = require('path').basename(__filename).split(".")[0]
const { prefix } =require('../../config.json')

exports.execute = (client, message, args) => {
    const result = eval(message.content.replace(`${prefix}eval`, ''))
    message.channel.send(result)
}
exports.config = {
    disabled: false, // if the command is disabled
    permission: [], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: false, // if you can use commands in only guilds or also dms
    hobDevOnly: true, // If you want only hob devs can use
    aliases: []
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `eval scripts!!`,
    usage: `${filename}` 
}