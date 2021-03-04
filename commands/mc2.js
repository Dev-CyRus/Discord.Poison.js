module.exports = {
    name: 'mc2',
    description: "Sends minecraft creative mode server ip",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1E90FF')
        .setTitle('This is the creative mode server ip address')
        .setDescription('serverofpoison.aternos.me')

        message.channel.send(newEmbed);
            
    }
    

}