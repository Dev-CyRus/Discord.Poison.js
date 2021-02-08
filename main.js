const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const Distube = require('distube')

client.distube = new Distube(client, {searchSongs: false, emitNewSongOnly: true});

client.once('ready', () =>{
    console.log('Poison is Online!')
    client.user.setActivity("The prefix is +")
});

client.on('message' , message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'hi'){
        client.commands.get('hi').execute(message, args);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if (command =='invite'){
        client.commands.get('invite').execute(message, args);
    } else if (command == 'mc'){
        client.commands.get('mc').execute(message, args);
    }
});

client.login(process.env.TOKEN);