const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    const status = args.join(" ")
    client.user.setPresence({ activities: [{ name: status }] });

    message.reply(`Sucessfully set my status to ${status}`)
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
    description: `sets bot's status`,
    usage: `${filename} <what to set to>` 
}