const Discord = require('discord.js')

const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    const embed = new Discord.MessageEmbed()

    embed.setTitle('**Hob Credits**')
    .setThumbnail('https://cdn.discordapp.com/attachments/799539037332439041/799826560424869898/GFX-Style.jpg')
    .setFooter('Hob Bot')
    .setColor('#00AAFF')

    .setDescription('`InFamousDino#7871` - Lead Developer, `ItzRock#2877` - Contributer to Hob!!')

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
    description: `Credits for Hob`,
    usage: `${filename}` 
}