const Discord = require('discord.js')
const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('**Help Commands**')
    .setFooter('Hob Bot')
    .setColor('#00AAFF')
    //.setImage('https://cdn.discordapp.com/attachments/799539037332439041/799826560424869898/GFX-Style.jpg')
    .setThumbnail('https://cdn.discordapp.com/attachments/799539037332439041/799826560424869898/GFX-Style.jpg')
    
    .addFields(
    {
        name: '**Fun Commands**',
        value: '`owo`, `say`, `forg`, `rate`.',
        inline: true
    },

    {
        name: '**Server Admin Commands**',
        value: '`editstatus`, `mute`, `kick`, `ban`, `purge`, `config`, `setwelcome`, `prefix`. ',
        inline: true 
    },

    {
        name: '**Other Commands**',
        value: '`help`, `permlevel`, `ping`, `serverlist`, `support`, `dan_andrews`.',
        inline: true

    })
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
    description: `hob hob hob help help hob`,
    usage: `${filename}` 
}