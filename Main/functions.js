module.exports = client => {
    client.loadCommand = (category, commandName) => {
      try {
        console.log(`Loading Command: ${commandName}`);
        const props = require(`./commands/${category}/${commandName}`);
        if (props.init) {
          props.init(client);
        }
        client.commands.set(props.info.name, props);
        props.config.aliases.forEach((alias) => {
          client.aliases.set(alias, props.info.name);
        });
        return true;
      } catch (e) {
        console.log(e);
        return `Unable to load command ${commandName}: ${e}`;
      }
    };
    client.findUser = (message, name) => {
      let user = message.mentions.members.first();
      if (!user) {
        let users;
        users = client.searchForMembers(message.guild, name);
        if (users.length > 1)
          return [
            false,
            "Found multiple users! Please be more specific or mention the user instead.",
          ];
        else if (users.length == 0)
          return [false, "That user doesn't seem to exist. Try again!"];
        user = users[0];
      }
      return [true, user];
    };

    client.clean = async (client, text) => {
      if (text && text.constructor.name == "Promise")
        text = await text;
      if (typeof text !== "string")
        text = require("util").inspect(text, {depth: 1});
  
      text = text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203))
        .replace(client.token, "Unknown")
  
      return text;
    };

    client.searchForMembers = function (guild, query) {
      if (!query) return;
      query = query.toLowerCase();
  
      var a = [];
      var b;
  
      try {
        b = guild.members.cache.find((x) => x.displayName.toLowerCase() == query);
        if (!b)
          guild.members.cache.find((x) => x.user.username.toLowerCase() == query);
      } catch (err) {}
      if (b) a.push(b);
      guild.members.cache.forEach((member) => {
        if (
          (member.displayName.toLowerCase().startsWith(query) ||
            member.user.tag.toLowerCase().startsWith(query)) &&
          member.id != (b && b.id)
        ) {
          a.push(member);
        }
      });
      return a;
    };
}