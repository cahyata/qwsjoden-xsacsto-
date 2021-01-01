const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  
  let embed = new MessageEmbed()
    .setAuthor("PING " + client.user.username, "https://i.imgur.com/1sPt9ja.png")
    .setColor('#2f3136')
    .addField("LATENCY", `${Date.now() - message.createdTimestamp}ms`)
    .addField("API LATENCY", `${Math.round(client.ws.ping)}ms`)
    .setTimestamp()
  
  message.channel.send(embed)
}