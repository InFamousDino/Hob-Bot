const Discord = require('discord.js')
const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    const embed2 = new Discord.MessageEmbed()

    const { dev } = require('../../config.json')
    const { member } = message

    embed.setTitle('**Help Commands**')
    embed.setFooter('Hob Bot')
    embed.setColor('#00AAFF')
    
    if (!member.permissions.has('KICK_MEMBERS' || 'BAN_MEMBERS')){
    embed.addFields(
    {
        name: '**Fun Commands**',
        value: '`say`, `forg`, `rate`, `bocc`, `amogus`.',
        inline: true
    },
    
    {
        name: '**Utility Commands**',
        value: '`help`, `support`, `avatar`.',
        inline: true
    },

    {
        name: '**Other Commands**',
        value: '`serverlist`, `credits`.',
        inline: true

    })
    message.reply({ embeds: [embed] })
    }

    if (member.permissions.has('KICK_MEMBERS' || 'BAN_MEMBERS')){
            embed.addFields(
            {
                name: '**Fun Commands**',
                value: '`say`, `forg`, `rate`, `bocc`, `amogus`.',
                inline: true
            },

            {
                name: '**Utility Commands**',
                value: '`help`, `support`, `avatar`.',
                inline: true
            },
        
            {
                name: '**Other Commands**',
                value: '`serverlist`, `credits`.',
                inline: true
        
            },

            {
                name: '**Server Admin Commands**',
                value: '`announce`, `Ban`, `Kick`, `Mute`, `Unmute`, `Purge`, `Bot-Config`.',
                inline: true
        
            }
        )

        message.reply({ embeds: [embed] })
    }
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