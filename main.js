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

client.once('ready', () =>{
    console.log('Poison is Online!')
    client.user.setActivity("Type +ticket for help")
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '▬▬▬ 【 untrusted 】▬▬▬');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('780499363369713705').send(`
━━━━━━━━━━━━━━━━━━━━━━━━
              【 <a:ac:831413092775886891> 】 ****POISON'S LABORATORY****  【 <a:ac:831413092775886891> 】
━━━━━━━━━━━━━━━━━━━━━━━━
> Greetings  <@${guildMember.user.id}>, 
> Welcome to POISON'S Official Discord Server
**__Be sure to__** :
━━━━━━━━━━━━━━━━━━━━━━━━
<a:Pin:783924500063453186>│<a:arrow:783926999302799411> Please react ✅ on <#784811207784923136>
<a:emg:795351407452618753>│<a:arrow:783926999302799411> Please read <#780500519659503656>
<a:dc:795351406017118318>│<a:arrow:783926999302799411> Don't forget to take **role** from <#780707732721500161>
<a:starr:795351408274046996>│<a:arrow:783926999302799411> Use <#780488699708047420> for ***chatting***
━━━━━━━━━━━━━━━━━━━━━━━━`)
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
    } else if (command == 'rule'){
        client.commands.get('rule').execute(message, args, Discord);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command == 'mc2'){
        client.commands.get('mc2').execute(message, args);
    } else if (command == 'fb'){
        client.commands.get('fb').execute(message, args);
    } else if (command == 'git'){
        client.commands.get('git').execute(message, args)
    } else if (command == 'ticket'){
        client.commands.get('ticket').execute(message, args, client, Discord)
    } else if (command == 'pubgid'){
        client.commands.get('pubgid').execute(message, args)
    } else if (command == 'play'){
      client.commands.get('play').execute(message, args)
    } else if (command == 'leave'){
      client.commands.get('leave').execute(message, args);
    }
});


client.login(process.env.BOTTOKEN);