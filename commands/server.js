const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  
  let sicon = message.guild.iconURL;
  let embed = new MessageEmbed()
  .setColor("#2f3136")
  .setThumbnail(sicon)
  .setAuthor(`${message.guild.name}`, "https://i.imgur.com/1sPt9ja.png")
  .addFields(
    { name: ':crown: Owner', value: 'FarrelRaditya18#5772', inline: true},
    { name: '💎 Lupa ', value: `${message.guild.owner.user.tag} (${message.guild.owner.id})`, inline: true},
    { name: ':calendar: Dibuat pada' , value: `${message.guild.createdAt.toLocaleString()}`, inline: true},
    )
  .addFields(
    { name: '🚩 AFK Timeout', value: `${message.guild.afkTimeout / 60} minutes`, inline: true},
    { name: ':busts_in_silhouette: Jumlah penumpang', value: `${message.guild.memberCount}`, inline: true},
    { name: '🚩 Lokasi', value: `${message.guild.region}`, inline: true}
	)
  .setFooter(`${message.author.username}`, `${message.author.avatarURL()}`)
  .setTimestamp()
  
    message.channel.send(embed)
}

exports.help = {
  name: 'server',
  description: 'Displays server information & statistics',
  usage: 'server',
  category: 'General',
};