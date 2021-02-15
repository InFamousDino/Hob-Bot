const Discord = require('discord.js')
const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    const embed = new Discord.MessageEmbed()

    .setTitle('Daniel Andrews')
    .setURL('https://en.wikipedia.org/wiki/Daniel_Andrews')
    .setColor('#00AAFF')

    .setDescription('Dan the man. :sunglasses:')
    .setImage('https://cdn.discordapp.com/attachments/799945197105709067/800971041337638932/Z.png')

    message.channel.send(embed)
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
    description: `${filename}!!`,
    usage: `${filename}` 
}

