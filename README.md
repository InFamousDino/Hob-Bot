# Hob-Bot

![image](https://user-images.githubusercontent.com/61729130/129024944-9a1d0c8b-15e2-4951-ad68-24ac79f923d6.png)


Seb here, this is my custom Discord bot which has multiple services for many server needs. This is very because it isnt done ofc.

# Prerequisites

* Basic Knowledge of Javascript,
* MongoDB Server,
* Node.JS updated to latest version.

# How to install Hob

To install hob you have to download Hob when it is avaliable fully.

1. Download Hob
2. Add a file named: `config.json` in Main folder with the following content:
  `
  {
    "token": "(bot token)",
    "mongoID": "(mongo URL)",
    "prefix": ";",
    "devID": [""]
  }
  `
  
  * Token: Bot token for bot (DO NOT SHARE THIS WITH ANYONE EXCEPT YOURSELF)
  * MongoID: Token to access mongoDB.
  * Prefix: Bots prefix.
  * devID: Discord Ids for dev access.

3. Either use a server, online service or if using VSC open the terminal and type: "`node Main`" (not advisable for long-term solution).

# How to update Hob to latest versions of Discord JS

This is ***really*** not advisable without a Hob release. But to do this:

1. Type `npm i discord.js` into the terminal.
2. Update Node.js if possible.
3. Update all commands and modules to any removed/added content.

# Links

* [Hob Support Server](https://discord.gg/S8CzyTymgf)
* [Hob Invite Link:](https://discord.com/oauth2/authorize?client_id=799469166351745036&permissions=8&scope=bot)
