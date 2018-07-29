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

client.on("message", (message) => {
  if(message.content === "!youtube") {
    message.channel.send("https://www.youtube.com/channel/UC-seWX5wYwk9pMm8v-ntV8g?disable_polymer=1");

  }
});

client.on("message", (message) => {
  if(message.content === "!info") {
    message.channel.send("```VERSION: 0.0.2v \nCREATOR: GLANOP \nBOT CREATED ON: 26/07/2018```");

  }
});

client.on("message", (message) => {
  if(message.content === "!xhelp") {
    message.channel.send("```HELP SECTION \n!info = This Shows all the info about the bot. \n!youtube = This shows Xsjamaanx's YouTube Channel.```");

  }
});


client.on('guildMemberAdd' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
 channel.send(` **[WELCOME]** ${member} Welcome to Xsjamaanx Discord Server if you need any help just ask a staff member!`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
