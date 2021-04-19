const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
  const ms = require('ms')
  const target = message.mentions.users.first();
  if (target) {

      let mainRole = message.guild.roles.cache.find(role => role.name === 'Cool People');
      let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

      let memberTarget = message.guild.members.cache.get(target.id);

      if (!args[1]) {
          memberTarget.roles.add(muteRole.id);
          message.channel.send(`<@${memberTarget.user.id}> has been muted!`);
          return
      }

      message.channel.send(`<@${memberTarget.user.id}> has been muted.`);

  } else {
      message.channel.send('Cant find that member!');
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
  description: `Mute a user.`,
  usage: `${filename} <@user> [Reason]` 
}