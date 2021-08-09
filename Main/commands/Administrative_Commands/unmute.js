const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
  const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Cool People');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.reply(`<@${memberTarget.user.id}> has been unmuted`);
        } else{
            message.reply('Cant find that member!');
        }
}

exports.config = {
  disabled: false, // if the command is disabled
  permission: ['ADMINISTRATOR'], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
  guildOnly: true, // if you can use commands in only guilds or also dms
  hobDevOnly: false, // If you want only hob devs can use
  aliases: []
}

exports.info = {
  name: filename,
  category: __dirname.split("/")[__dirname.split("/").length - 1],
  description: `Unmute a user.`,
  usage: `${filename} <@user>` 
}