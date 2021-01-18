const Discord = require('discord.js')
const command = require('../command')

module.exports = client => {
    command(client, 'help', message => {
        const { member } = message

            const embed = new Discord.MessageEmbed()
    
            .setTitle('**Help Commands**')
            .setFooter('Hob Bot')
            .setColor('#00AAFF')
            //.setImage('https://cdn.discordapp.com/attachments/799539037332439041/799826560424869898/GFX-Style.jpg')
            .setThumbnail('https://cdn.discordapp.com/attachments/799539037332439041/799826560424869898/GFX-Style.jpg')
            
            .addFields({
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
                value: '`help`, `permlevel`, `ping`, `serverlist`, `support`.',
                inline: true
        
            },
    
        )
        message.channel.send(embed)
    })
}

