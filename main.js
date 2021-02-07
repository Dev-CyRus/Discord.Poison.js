const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

client.once('ready', () =>{
    console.log('Poison is Online!');
    bot.user.setActivity('Prefix is: +', { type: "WATCHING"}).cath(console.error)
});

client.on('message' , message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'hi'){
        message.channel.send('Hello dear, How are you?');
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/channel/UCqKJ0NnfNEk-j8pPzDe8CFw?view_as=subscriber');
    } else if (command =='invite'){
        message.channel.send('https://discord.gg/6G4bSMzaw4');
    } else if (command == 'mc'){
        message.channel.send('poisonslab.aternos.me');
    }
});

client.login(process.env.TOKEN);