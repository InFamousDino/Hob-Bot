const Discord = require('discord.js')
const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {

    client.guilds.cache.forEach((guild) => {
        const embed = new Discord.MessageEmbed()

        // Setting up embed \\

        embed.setTitle(`**${guild.name} Stats**`)
        embed.setFooter('Hob Bot Statistics')

        embed.addFields(
            {
                name: `Server Members`,
                value: `There are ${guild.memberCount} users in this guild.`,
                inline: true
            }
        )

        // Sending & Extras \\

        message.reply({ embeds: [embed] })
    })
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
    description: `Check the server statistics.`,
    usage: `${filename}` 
}