const Discord = require('discord.js')

const { Client, Intents } = require("discord.js");
const client = new Client({ 
  intents: ["DIRECT_MESSAGES", "GUILDS", "GUILD_BANS", "GUILD_INTEGRATIONS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_WEBHOOKS"], // You may need to configure this based off what you want
  partials: ["MESSAGE", "CHANNEL"],
  allowedMentions: { 
      parse: ["everyone", "roles"] // Incase the bot has vulnerability which allows it to send unparsed user data, this will result in the bot not pinging a mass number of users. Remove any if needed.
  } 
});

const config = require('./config.json')

const mongo = require('./src/mongo')

client.commands = new Map()
client.aliases = new Map()

client.config = require('./config.json')

require(`./functions`)(client)
require('./command')(client)

client.on('ready', async () => {
    console.log('Hob is activated!')

    setInterval(() => { 
        client.destroy()
        client.login(config.token)
      }, 3600000); 

      //await mongo().then(mongoose => {
      //  try {
      //    console.log('Mongo Connected')
      //  } finally {
      //    mongoose.connection.close()
      //  }

      //})
})

client.login(config.token)

