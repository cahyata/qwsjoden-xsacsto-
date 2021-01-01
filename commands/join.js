const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  const input = args.join(' ')
  const user = message.guild.member(message.mentions.users.first() || message.author || message.guild.members.fetch(args[0]) || message.guild.members.find(x => x.username == input) ) // Takes the user mentioned, or the ID of a user
  let micon = user.user.displayAvatarURL({dynamic:true, size:4096}) // Gets their Avatar

      let embed = new MessageEmbed()
      .setDescription("**INFORMASI PENUMPANG**")
      .setColor('#2f3136')
      .setThumbnail(micon) // Their icon
      .addField("Nama", `${user.user.username}#${user.user.discriminator}`) // Their name, I use a different way, this should work
      .addField("ID", user.id) // Their ID
      .addField("Masuk pada", `${user.joinedAt.toLocaleString()}`) // When they joined

      await message.channel.send(embed)
}