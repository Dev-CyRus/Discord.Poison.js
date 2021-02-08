module.exports = {
    name: 'ping',
    description: "This is a ping command which replies pong!",
    execute(message, args){
        message.channel.send('Pong!');
    }
}