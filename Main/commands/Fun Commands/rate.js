const Discord = require('discord.js')

const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    if(!args[0]) return message.channel.send(`I RATE YOUR ABILITY TO GIVE ARGS 0/10 >:(`)
    const rating = Math.floor(Math.random() * 10) + 1;
    const embed = new Discord.MessageEmbed()

    embed.setDescription(`I rate \`${args.join(" ")}\` a \`${rating}/10\` `)
    embed.setAuthor('Hob')
    embed.setColor('#00AAFF')

    message.channel.send({ embeds: [embed] })
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
    description: `hob gives its honest opinions`,
    usage: `${filename} <a thing to rate>` 
}