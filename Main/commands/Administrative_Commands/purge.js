const filename = require('path').basename(__filename).split(".")[0]
exports.execute = async (client, message, args) => {
    var amount = args.join(" ");
    if (!amount)
      return message.reply("You haven't given an amount of messages which should be deleted!");
    if (isNaN(amount)) return message.reply("You Crazy? That isn't a number!");
  
    if (amount > 100)
      return message.reply("You can't delete more than 100 messages at once!");
    if (amount < 1) return message.reply("You cant delete less than 0");
    amount++;
    await message.channel.messages.fetch({ limit: amount }).then((messages) => {
      message.channel.bulkDelete(messages);
      message
        .reply(`Deleted ${amount - 1} messages :thumbsup:`)
        .then((msg) => {
          msg.delete({ timeout: 5000 });
        })
        .catch(/* uh idk*/);
    });
}
exports.config = {
    disabled: false, // if the command is disabled
    permission: ['MANAGE_MESSAGES'], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: true, // if you can use commands in only guilds or also dms
    hobDevOnly: false, // If you want only hob devs can use
    aliases: []
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `clean those naughty messages away`,
    usage: `${filename} <amount>` 
}