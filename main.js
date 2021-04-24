const Discord = require('discord.js');

const Canvas = require('canvas');

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
});

const activities_list = [
    "Type +ticket for help", 
    "Use +play to play any music you want",
    "Getting developed by CyRus", 
    "Use +youtube to get Cyrus's youtube channel"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === '│🚾│ᴡᴇʟᴄᴏᴍᴇ');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};
  
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`
  ━━━━━━━━━━━━━━━━━━━━━━━━
          【 <a:ac:831413092775886891> 】 ****POISON'S LABORATORY****  【 <a:ac:831413092775886891> 】
━━━━━━━━━━━━━━━━━━━━━━━━
> Greetings  ${member}, 
> Welcome to POISON'S Official Discord Server
**__Be sure to__** :
━━━━━━━━━━━━━━━━━━━━━━━━
<a:Pin:783924500063453186>│<a:arrow:783926999302799411> Please react ✅ on <#784811207784923136>
<a:emg:795351407452618753>│<a:arrow:783926999302799411> Please read <#780500519659503656>
<a:dc:795351406017118318>│<a:arrow:783926999302799411> Don't forget to take **role** from <#780707732721500161>
<a:starr:795351408274046996>│<a:arrow:783926999302799411> Use <#780488699708047420> for ***chatting***
━━━━━━━━━━━━━━━━━━━━━━━━`, attachment);
});

//client.on('guildMemberAdd', guildMember => {
//    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '▬▬▬ 【 untrusted 】▬▬▬');

//    guildMember.roles.add(welcomeRole);
//    guildMember.guild.channels.cache.get('780499363369713705').send(`
//━━━━━━━━━━━━━━━━━━━━━━━━
//              【 <a:ac:831413092775886891> 】 ****POISON'S LABORATORY****  【 <a:ac:831413092775886891> 】
//━━━━━━━━━━━━━━━━━━━━━━━━
//> Greetings  ${member}, 
//> Welcome to POISON'S Official Discord Server
//**__Be sure to__** :
//━━━━━━━━━━━━━━━━━━━━━━━━
//<a:Pin:783924500063453186>│<a:arrow:783926999302799411> Please react ✅ on <#784811207784923136>
//<a:emg:795351407452618753>│<a:arrow:783926999302799411> Please read <#780500519659503656>
// <a:dc:795351406017118318>│<a:arrow:783926999302799411> Don't forget to take **role** from <#780707732721500161>
// <a:starr:795351408274046996>│<a:arrow:783926999302799411> Use <#780488699708047420> for ***chatting***
// ━━━━━━━━━━━━━━━━━━━━━━━━`)
//});

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