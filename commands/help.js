const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setColor('#2f3136')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .addField('DAFTAR COMMAND', '`avatar <mention>` `ping` `stats`\n `help` `yt` `join <mention>` `say <message>`')
  .setFooter('! <command>', 'https://i.imgur.com/f4sbnES.png');
  message.channel.send(embed)
}