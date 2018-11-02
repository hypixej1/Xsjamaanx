const Discord = require('discord.js');
const client = new Discord.Client();

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

client.on('guildBanAdd' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'staff-bot');
  if (!channel) return;
 channel.send(` **[BANNED]** ${member} Has been banned from the server. (staff logs)`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN); 
