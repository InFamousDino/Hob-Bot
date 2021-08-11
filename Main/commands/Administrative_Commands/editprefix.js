const filename = require('path').basename(__filename).split(".")[0]
exports.execute = async (client, message, args) => {

    const mongoose = require('mongoose')
    const prefixSchema = require('../../models/prefixSchema')
    if (!args[0]) return message.channel.send('Please specify a prefix to change to.')

    const data = prefixSchema.findOne({ Guild : message.guild.id }).catch(error => { throw error })
    if (!data) {
        async function update() {
            await prefixSchema.updateOne({ Guild: message.guild.id }, { $set: { Prefix: args[0] } })
            message.channel.send(`Your prefix has been updated to **${args[0]}**`)
        }
        update()
    } else {
        async function update() {
            await new prefixSchema({
                Guild : message.guild.id,
                Prefix : args[0]
            }).save()
            message.channel.send(`Custom prefix in this server is now set to **${args[0]}**`)
        }
    }

}

exports.config = {
    disabled: false, // if the command is disabled
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