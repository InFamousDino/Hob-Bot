const command = require('../command')
const Discord = require('discord.js')

module.exports = client => {
    command(client, 'dan_andrews', message => {
        const embed = new Discord.MessageEmbed()

        .setTitle('Daniel Andrews')
        .setURL('https://en.wikipedia.org/wiki/Daniel_Andrews')
        .setColor('#00AAFF')

        .setDescription('Dan the man. :sunglasses:')
        .setImage('https://cdn.discordapp.com/attachments/799945197105709067/800971041337638932/Z.png')

        message.channel.send(embed)
    })
}
