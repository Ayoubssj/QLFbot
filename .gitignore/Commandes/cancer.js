const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    id = message.content.slice(8);
    message.delete();
    client.users.get(id).send("test");
}

module.exports.help = {
    name: "cancer"
}