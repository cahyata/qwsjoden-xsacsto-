const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  
  let embed = new MessageEmbed()
  .setTitle('Canisto 04')
  .setColor("#2f3136")
  .setThumbnail('https://yt3.ggpht.com/ytc/AAUvwngwH6tVSF0MBcIR2gWahZ5zUyq4V-vqmYFKrPl_=s176-c-k-c0x00ffffff-no-rj')
  .setDescription('Hellow! Selamat Datang Di Channel Canisto 04 Nama saya Farrel dan asal saya dari Surabaya. Isi youtube saya ini 75% adalah Gaming karna saya juga suka main game, dan mungkin ada beberapa video random supaya anda-anda semua tidak bosan kwkwkk Semoga sukak yakk! :D')
  .addFields(
    { name: 'YT:', value : 'https://www.youtube.com/channel/UC83uC86aiXnDUmTUg2EetXw'}
  )
  .setImage('https://i.imgur.com/4lxo5cO.png')
  message.channel.send(embed)
}