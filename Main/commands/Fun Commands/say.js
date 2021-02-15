const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    if(!args[0]) return message.channel.send(`what am i meant to say?!!?!?`)
    const toSend = args.join(" ")
    const banned = [
        "@everyone",
        "@here",
        "<@&" //roles
    ]
    let illegalmessage = false
    banned.forEach( msg => {
        if(toSend.includes(msg)) illegalmessage = true
    })
    if(illegalmessage == true) return message.channel.send("no! ❤")
    message.channel.send(toSend)
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
    description: `make hob say something`,
    usage: `${filename} <message>` 
}