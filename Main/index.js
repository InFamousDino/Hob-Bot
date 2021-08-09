const Discord = require('discord.js')

const prefixSchema = require('./models/prefixSchema')

const { Client, Intents } = require("discord.js");
const client = new Client({ 
  intents: ["DIRECT_MESSAGES", "GUILDS", "GUILD_BANS", "GUILD_INTEGRATIONS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_WEBHOOKS"], // You may need to configure this based off what you want
  partials: ["MESSAGE", "CHANNEL"],
  allowedMentions: { 
      parse: ["everyone", "roles"] // Incase the bot has vulnerability which allows it to send unparsed user data, this will result in the bot not pinging a mass number of users. Remove any if needed.
  } 
});

const config = require('./config.json')
let prefixMain = require('./config.json')

const mongoose = require('mongoose')

client.commands = new Map()
client.aliases = new Map()

require(`./functions`)(client)
require('./command')(client)

client.on('ready', async () => {
    console.log('Hob is activated!')
})

mongoose.connect(config.mongoID, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(()=>[
  console.log("Conntected to DB")
]).catch((err)=>{
  console.log(err)
})

client.login(config.token)

