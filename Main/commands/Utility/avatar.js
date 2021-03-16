const Discord = require('discord.js')

const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
        const user = message.mentions.users.first() || message.author;
        message.channel.send(user.avatarURL())
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
    description: `Get the avatar of a person.`,
    usage: `${filename} [@User]` 
}