const filename = require('path').basename(__filename).split(".")[0]
const config = require('./../../config.json')
exports.execute = (client, message, args) => {

    function resetBot() {
        message.reply('Resetting...')
        .then(() => client.destroy())
        .then(() => client.login(config.token))
        .then(() => message.channel.send(`${client.user.tag} was successfully restarted!`));
    }

    resetBot()
}
exports.config = {
    disabled: false, // if the command is disabled
    permission: [], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: false, // if you can use commands in only guilds or also dms
    hobDevOnly: true, // If you want only hob devs can use
    aliases: ['restart']
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `Reboot the hobhob`,
    usage: `${filename}` 
}