const { MessageEmbed } = require('discord.js')

module.exports = {
name: "servericon",
  description: "Show icon server",
  run: async (client, message, args) => {
    
    const embed = new MessageEmbed()
    .setTitle("Server Icon")
    .setColor('#7289da')//colornya bebas kalian bisa Ganti apa aja
  .setImage(message.guild.iconURL({ format: 'png', dynamic: true , size: 4096}))
    .setFooter(`${message.author.username}`)
    .setTimestamp()
    
    message.channel.send(embed)
    }
}