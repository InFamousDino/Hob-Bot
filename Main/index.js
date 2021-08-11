const prefixSchema = require('./models/prefixSchema')
const { Client } = require("discord.js");
const client = new Client({ 
  intents: 32767, // You may need to configure this based off what you want
  partials: ["ALL"],
  allowedMentions: { 
      parse: ['users'],
      repliedUser: true
  } 
});

const config = require('./config.json')

const mongoose = require('mongoose')

client.config = config
client.commands = new Map()
client.aliases = new Map()

require(`./functions`)(client)
require('./command')(client)

client.on('ready', async () => {
  console.log(`${client.user.tag} is activated!`)
})

mongoose.connect(config.mongoID, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(()=>[
  console.log("Conntected to DB")
]).catch((err)=>{
  console.log(err)
})

client.login(config.token)

