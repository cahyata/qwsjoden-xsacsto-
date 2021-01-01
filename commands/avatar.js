const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  const input = args.join(' ')
  const user = client.users.cache.get(input) || client.users.cache.find(x => x.username == input) || message.mentions.users.first() || message.author
  let embed = new MessageEmbed()
  .setTitle(`${user.tag} Avatar`)
  .setImage(user.displayAvatarURL({dynamic:true, size:4096}))
  .setColor("#2f3136")
  .setFooter(`${message.author.username}`)
  .setTimestamp()
  message.channel.send(embed)
}