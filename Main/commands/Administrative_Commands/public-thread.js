const filename = require('path').basename(__filename).split(".")[0]
exports.execute = async (client, message, args) => {

const thread = await message.channel.threads.create({
    name: `${args[0]}`,
    autoArchiveDuration: 1440,
    reason: `${args[1]}`,
});

if (thread.joinable) await thread.join();



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
    description: `example description`,
    usage: `${filename} [optional] <required>` 
}