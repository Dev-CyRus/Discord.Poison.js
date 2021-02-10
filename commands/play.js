const { Client } = require('discord.js');
const distube = require('distube')

module.exports.run = async (bot, message, args) => {
    distube.play(message, args.join(" "));

    Client.distube.play(message, music)
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}