const { prefix } = require('./config.json')
const { promisify } = require("util");
const { ClientUser } = require('discord.js');
const readdir = promisify(require("fs").readdir);
const mongo = require('./src/mongo')
const commandPrefixSchema = require('./schema/command-prefix-schema')
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
        
        if (cmd && !message.guild && cmd.config.guildOnly) return message.channel.send("This command is unavailable in DMs. Please run in a Server.");

        if(cmd.config.hobDevOnly == true && !client.config.dev.includes(message.author.id)) return message.channel.send(`You cannot use this command!`)

        const requiredPerms = cmd.config.permission
        const lacking = []
        requiredPerms.forEach(perm => {
            if(message.member.hasPermission(perm) !== true) lacking.push(perm)
        })
        if(lacking.length !== 0) return message.channel.send(`You are lacking permissions:\n \`${lacking.join("\n")}\``)
        try {
            cmd.execute(client, message, args); 
          } catch (error) {
            message.channel.send(`An error has occured in the command! ${error.name}: ${error.message}.`)
            console.log(`COMMAND ERROR => ${error.name}: ${error.message}`)
          }
    })
}