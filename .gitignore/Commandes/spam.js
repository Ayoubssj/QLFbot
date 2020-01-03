const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    mention = message.mentions.users.first();
    message.delete();
    mention.sendMessage("test");
}

module.exports.help = {
    name: "mp"
}