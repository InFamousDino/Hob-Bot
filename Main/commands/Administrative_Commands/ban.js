const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    if(!args[0] || !args[1]) return message.channel.send(`Invalid arguments: usage \`${filename} <user> <reason>\``)
    const rawuser = client.findUser(message, args[0])
    if(rawuser[0] == false) return message.channel.send(rawuser[1])
    const member = rawuser[1]
    member.ban({reason})
    message.channel.send(`${member.user.tag} The user was banned successfully.`)
}
exports.config = {
    disabled: false, // if the command is disabled
    permission: ["BAN_MEMBERS"], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: true, // if you can use commands in only guilds or also dms
    hobDevOnly: false, // If you want only hob devs can use
    aliases: []
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `hob wants genocide!`,
    usage: `${filename} <user> <reason>` 
}