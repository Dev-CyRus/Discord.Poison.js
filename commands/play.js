const { Client } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const music = args.join(" ");

    Client.distube.play(message, music)
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}
