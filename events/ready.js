const memberCount = require(`./membercount.js`)
const cron = require('cron');
const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
    
    

module.exports = async (client) => {
  console.log("Im online!");
  client.user.setPresence("dnd");
  //activity
    const status = [
      `SELAMAT NATAL 2020`,
      `SELAMAT TAHUN BARU 2021`
    ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "PLAYING"}) //watching bisa kalian ganti sama playing dan semacamnya
  }, 2000)
  
      // Getting the channel from client.channels Collection.
    const Channel = client.channels.cache.get("782554944641302538");
    // Checking if the channel exists.
    if (!Channel) return console.error("Couldn't find the channel.");
  const embed = new MessageEmbed()
  Channel.send('').catch(e => console.log(e));



const channel = ('782538559910314055'); // Let's say this is the channel where you want to send it.
const job = new cron.CronJob('0 0 12 * * *', () => {
  channel.send("Selamat siang!");
});
  
  memberCount(client)
}
