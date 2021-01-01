const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(process.env.PORT);
//status

//event handler
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});

//command handler
client.on("message", async message => {
const prefix = "!"
if(!message.content.startsWith(prefix)) return null;
let msg = message.content.toLowerCase();
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
let command = cmd;

let commandFiles;
try{
  commandFiles = require(`./commands/${cmd}.js`)
} catch (err) {
  return message.reply("Command Not Found")
}
const db = require("quick.db")
const now = Date.now()
if(db.has(`cd_${message.author.id}`)) {
  const expirationTime = db.get(`cd_${message.author.id}`) + 3000
  if(now < expirationTime) {
  const timeLeft = (expirationTime - now) / 1000;
		return message.reply(`Tolong tunggu ${timeLeft.toFixed(1)} detik lagi sebelum menggunakan command \`${cmd}\`.`);
  }
}
  db.set(`cd_${message.author.id}`, now);
  setTimeout(() => {
    db.delete(`cd_${message.author.id}`)
  },3000)
try {
  commandFiles.run(client, message, args)
} catch (err) {
  } finally {
    console.log(`${message.author.tag} menggunakan command ${prefix}${cmd}`)
  }

});
client.login(process.env.TOKEN);
//dm auto responder
client.on('message', msg => {
  if (msg.channel.type == "dm") {
    msg.author.send("Halo gaes, canisto di sini");
    return;
  }
});
//yt notification
function handleUploads() {
    if (client.db.fetch(`postedVideos`) === null) client.db.set(`postedVideos`, []);
    setInterval(() => {
        client.request.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${client.config.channel_id}`)
        .then(data => {
            if (client.db.fetch(`postedVideos`).includes(data.items[0].link)) return;
            else {
                client.db.set(`videoData`, data.items[0]);
                client.db.push("postedVideos", data.items[0].link);
                let parsed = client.db.fetch(`videoData`);
                let channel = client.channels.cache.get(client.config.channel);
                if (!channel) return;
                let message = client.config.messageTemplate
                    .replace(/{author}/g, parsed.author)
                    .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                    .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
        });
    }, client.config.watchInterval);
}

client.on("message", message => {
    if (message.author.bot) return false;

    if (message.content.includes("@here")) return false;

    if (message.mentions.has(client.user.id)) {
        message.channel.send("Hai");
    };
});



  function sendMessage() {
      var request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/790444758795419688/hkbrYW475lWlAVZ-X3_CKHpquf228QMyqTss9VDA8Safr3siEHthNnM5ayF4vz5uRpd4");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "ORANG RAMAH",
        avatar_url: "",
        content: "TES"
      }

      request.send(JSON.stringify(params));
    }

/* Message configuration */
const guildId = '782537011801489419';
const channelId = '782538559910314055';
const message = 'tes'

module.exports = bot => {
	/* HTTP Trigger URL*/
	app.get('/dailymessage', (req, res) => {
		var guild = bot.guilds.get(guildId);
		if(guild && guild.channels.get(channelId)){
			guild.channels.get(channelId).send(message);
		} else {
			res.status(404).send('Couldn\'t find the channel or guild');
		}
		res.status(200).send('Message sent');
	});
}


client.login(process.env.TOKEN).catch(e => {
  console.log("TOKEN ERROR");
});