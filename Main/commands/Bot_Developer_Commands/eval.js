const filename = require('path').basename(__filename).split(".")[0]

exports.execute = async (client, message, args) => {
    const code = args.join(" ");
    try {
        const evaled = await eval(code);
        const clean = await client.clean(client, evaled);
        message.reply(`\`\`\`js\n${clean}\n\`\`\``);
    } catch (err) {
        message.reply(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
    }
}
exports.config = {
    disabled: false, // if the command is disabled
    permission: [], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: false, // if you can use commands in only guilds or also dms
    hobDevOnly: true, // If you want only hob devs can use
    aliases: []
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `eval scripts!!`,
    usage: `${filename}` 
}