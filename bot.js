const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("655069429708750856")
setInterval(function() {
channel.send(`i am the best`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
