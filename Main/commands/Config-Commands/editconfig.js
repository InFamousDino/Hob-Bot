const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    // fucking hell here we go

    const mongoose = require('mongoose')
    const configSchema = require('../../models/configSchema')

    
}
exports.config = {
    disabled: true, // if the command is disabled
    permission: ['ADMINISTRATOR'], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: true, // if you can use commands in only guilds or also dms
    hobDevOnly: false, // If you want only hob devs can use
    aliases: []
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `example description`,
    usage: `${filename} [optional] <required>` 
}