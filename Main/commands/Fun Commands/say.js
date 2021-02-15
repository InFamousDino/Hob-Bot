const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    const banned = [
        "@everyone",
        "@here",
        "<@&" //roles
    ]
    args.forEach(arg => {
        if(banned.includes(arg)) arg = ""
    })
    message.channel.send(args.join(" "))
}
exports.config = {
    disabled: true, // if the command is disabled
    permission: [], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: false, // if you can use commands in only guilds or also dms
    hobDevOnly: false, // If you want only hob devs can use
    aliases: []
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `make hob say something`,
    usage: `${filename} <message>` 
}