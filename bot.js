const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No can do pal!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "incidents");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("You should create that role dude.");

    let mutetime = "10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> has been banned.`)
  }

}

module.exports.help = {
  name: "warn"
}

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Hi there.');
  	}
});

client.on('message', message => {
    if (message.content === 'shut up bot') {
    	message.reply('No u!');
  	}
});

client.on('message', message => {
    if (message.content === 'GlanOP is bad') {
    	message.reply('Dont talk to my dad like that!');
  	}
});

client.on('message', message => {
    if (message.content === 'Xsjamaanx is bad') {
    	message.reply('Dont talk to my brother like that! >:(');
  	}
});

client.on('message', message => {
    if (message.content === 'Zypeh is bad') {
    	message.reply('Dont talk to my brother like that! >:(');
  	}
});

client.on("message", (message) => {
  if(message.content === "xyoutube") {
    message.channel.send("https://www.youtube.com/channel/UC-seWX5wYwk9pMm8v-ntV8g?disable_polymer=1");

  }
});

client.on("message", (message) => {
  if(message.content === "xtwitter") {
    message.channel.send("https://twitter.com/Xsjamaanx1");

  }
});

client.on("message", (message) => {
  if(message.content === "xinfo") { 
    message.channel.send("```VERSION: 0.0.5v \nCREATOR: GLANOP \nBOT CREATED ON: 26/08/2018 \nLAST UPDATED BY: GLANOP```");

  }
});

client.on("message", (message) => {
  if(message.content === "xhelp") {
    message.channel.send("```HELP SECTION \n -\nxinfo = This Shows all the info about the bot. \n -\nxyoutube = This shows Xsjamaanx's YouTube Channel. \n -\nxtwitter = Xsjamaanx's Twitter Account```");

  }
});

client.on('guildMemberAdd' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', '👋welcome👋');
  if (!channel) return;
 channel.send(` **[WELCOME]** ${member} Welcome to Xsjamaanx Discord Server if you need any help just ask a staff member!`);
});

client.on('guildMemberRemove' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'staff-bot');
  if (!channel) return;
 channel.send(` **[LEAVE LOGS]** ${member} Has left the server. (staff logs)`);
});

client.on('guildMemberAdd' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'staff-bot');
  if (!channel) return;
 channel.send(` **[JOIN LOGS]** ${member} Has joined the server. (staff logs)`);
});

client.on('guildMemberAddBan' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'staff-bot');
  if (!channel) return;
 channel.send(` **[BANNED]** ${member} Has been banned. (staff logs)`);
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN); 
