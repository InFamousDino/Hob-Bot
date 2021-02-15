const { Message } = require('discord.js')
const command = require('../command')
const { prefix } = require('../config.json')
const Discord = require('discord.js')

module.exports = client =>{
    command(client, 'announce', message => {
        if (message.content.startsWith(prefix + "announce")) {
            let announcemessage = message.content.match(/(?<=announce ).*$/)[0];
            
            const announceEmbed = new Discord.MessageEmbed()
              .setColor("#ff1233")
              .setTitle(`Important Announcement`)
              .setDescription(announcemessage)
              .setFooter(`Hob Bot`)
              .setThumbnail('https://cdn.discordapp.com/attachments/799539037332439041/799826560424869898/GFX-Style.jpg')


            message.channel.send(announceEmbed);
            message.delete()
          }
    })
}