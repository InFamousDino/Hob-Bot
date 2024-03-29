const config = require('./config.json')
const { promisify } = require("util");
const { ClientUser } = require('discord.js');
const prefixSchema = require('./models/prefixSchema')
const readdir = promisify(require("fs").readdir);
module.exports = (client) => {
    loadCommands(client)
    
    async function loadCommands(client){
        const categories = await readdir(`${__dirname}/commands`)
        categories.forEach(async category =>{
            const commands = await readdir(`${__dirname}/commands/${category}`)
            commands.forEach(command => {
                const action = client.loadCommand(category, command);
                if(action !== true){
                    console.log(action)
                }
            })
        })
    }
    client.on('messageCreate', async message => {
        const data = await prefixSchema.findOne({ Guild : message.guild.id })
        var prefix = {}
        if (!data) prefix = config.prefix
        else prefix = data.Prefix
        const { content } = message;
        if(message.author.bot == true) return // This is a bot so ignore it
        const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
        if (message.content.match(prefixMention)) {
            return message.reply(`:wave: my prefix is: \`${prefix}\``);
        }

        if (message.content.indexOf(prefix) !== 0) return; // Not a Hob command

        const args = message.content.slice(prefix.length).trim().split(/ +/g); // Command arguments in Array format
        const command = args.shift().toLowerCase();

        // If the member on a guild is invisible or not cached, fetch them.
        if (message.guild && !message.member) await message.guild.members.fetch(message.author);

        try {client.commands.get(command) || client.commands.get(client.aliases.get(command));} catch (e) {return}
        const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command)); // fetch command
        if (!cmd) return; // if a command that doesnt exist then just return
        
        if (cmd && !message.guild && cmd.config.guildOnly) return message.reply("This command is unavailable in DMs. Please run in a Server.");

        if (cmd.config.hobDevOnly == true && !client.config.devID.includes(message.author.id)) return message.reply(`You cannot use this command!`)

        const requiredPerms = cmd.config.permission
        const lacking = []
        requiredPerms.forEach(perm => {
            if (message.member.permissions.has(perm) !== true) lacking.push(perm)
        })
        if(lacking.length !== 0) return message.reply(`You are lacking permissions:\n \`${lacking.join("\n")}\``)
        try {
            cmd.execute(client, message, args); 
          } catch (error) {
            message.reply(`An error has occured in the command! ${error.name}: \`${error.message}\``)
            console.log(`COMMAND ERROR => ${error.name}: ${error.message}`)
          }
    })
}