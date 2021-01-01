const { MessageEmbed } = require("discord.js")
const { platform, arch, cpus } = require("os")

exports.run = async(client, message, args) => {
  const model = cpus()[0].model + " " + arch()
  const tanggalBuat = client.user.createdAt
  
  const embed = new MessageEmbed()
  .setColor("#2f3136")
  .setTitle("Statistik Bot")
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: 'true'})+"?size=4096")
  .addField("Bot", `
Username: ${client.user.username}
Tanggal Dibuat: ${tanggalBuat}`, 'true')
  .addField("System", `
CPU: ${model}
Platform: ${platform}
Websocket: ${client.ws.ping} ms(miliseconds)`)
  .setFooter(`${message.author.username}`, `${message.author.avatarURL()}`)
  .setTimestamp()
  
  message.channel.send(embed)
}