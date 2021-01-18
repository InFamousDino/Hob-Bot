const { Message } = require('discord.js')
const Discord = require('discord.js')
const command = require('../command')

module.exports = client => {
    command(client, 'forg', message => {
    const embed = new Discord.MessageEmbed()

    .setTitle('**The holy forg**')
    .setImage(`https://cdn.discordapp.com/attachments/799945197105709067/800512174514503680/ol6qbxqbgqo51.png`)
    .setFooter('Hob Bot')
    .setColor('#00AAFF')

    message.channel.send(embed)
    })
}