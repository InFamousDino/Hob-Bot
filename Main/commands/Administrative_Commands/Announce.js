const Discord = require('discord.js')
const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, [...embed]) => {

  const announceEmbed = new Discord.MessageEmbed()
    .setColor("#ff1233")
    .setTitle(`Important Announcement`)
    .setDescription(embed.toString())
    .setFooter(`${client.user.username} Bot`)

  message.channel.send({ embeds: [announceEmbed] });
  message.delete();
};
exports.config = {
    disabled: false, // if the command is disabled
    permission: ["ADMINISTRATOR"], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
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