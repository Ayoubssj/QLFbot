const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;

    message.channel.send(membre.user.avatarURL);
}

module.exports.help = {
    name: "pp"
}