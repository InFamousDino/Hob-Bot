const Discord = require('discord.js')
const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {

    client.guilds.cache.forEach((guild) => {
        const embed = new Discord.MessageEmbed()

        // Setting up embed \\

        embed.setTitle(`**${guild.name} Stats**`)
        embed.setFooter('Hob Bot Statistics', 'https://cdn.discordapp.com/attachments/799539037332439041/799826560424869898/GFX-Style.jpg')

        embed.addFields(
            {
                name: `Server Members`,
                value: `There are ${guild.memberCount} users in this guild.`,
                inline: true
            }
        )

        // Sending & Extras \\

        message.channel.send(embed)
    })
}
exports.config = {
    disabled: true, // if the command is disabled
    permission: [], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: false, // if you can use commands in only guilds or also dms
    hobDevOnly: false, // If you want only hob devs can use
    aliases: []
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `view each hob server and their member count`,
    usage: `${filename}` 
}