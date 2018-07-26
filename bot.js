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
  if(message.content === "!alert") {
    message.channel.send("**[BOT UPDATE]** \nAll the bot updates will be made by the bot now! ( @here )");

  }
});
client.on('guildMemberAdd' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
 channel.send(` **[WELCOME]** ${member} Welcome to Xsjamaanx Discord Server if you need any help just ask a staff member!`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
