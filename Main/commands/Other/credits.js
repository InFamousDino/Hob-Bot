const Discord = require('discord.js')

const filename = require('path').basename(__filename).split(".")[0]
exports.execute = async (client, message, args) => {
    const seb = await client.users.fetch('584297317432164366')
    const lc = await client.users.fetch('321323430630785024')
    const rain = await client.users.fetch('297225184136396803')
    const anthony = await client.users.fetch('299682971374452739')
    const embed = new Discord.MessageEmbed()
        .setTitle('**Hob Credits**')
        .setFooter('Hob Bot')
        .setColor('#00AAFF')
        .setDescription(`\`${seb.username}#${seb.discriminator}\` - Lead Developer, \`${lc.username}#${lc.discriminator}\` - Developer of Hob, \`${anthony.username}#${anthony.discriminator}\` - Contributer to Hob, \`${rain.username}#${rain.discriminator}\` - Contributer of Hob.`)

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
    description: `Credits for Hob`,
    usage: `${filename}` 
}