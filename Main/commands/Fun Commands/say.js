if(!args[0]) return message.channel.send(`what am i meant to say?!!?!?`)
const toSend = args.join(" ")
const banned = [
    "@everyone",
    "@here",
    "<@&" //roles
]
let illegalmessage = false
banned.forEach( msg => {
    if(toSend.includes(msg)) illegalmessage = true
})
if(illegalmessage == true) return message.channel.send("no! ❤")
message.channel.send(toSend)