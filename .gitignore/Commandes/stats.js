const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;

    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Statistiques de l'utilisateur **${membre.user.tag}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                name: "> ID:",
                value: membre.id
                },
                {
                    name: "> Créé le:",
                    value: moment.utc(membre.user.createdAt).format("LLL")
                },
                {
                    name: "> Jeu joué:",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Aucun jeu"}`
                },

                {
                    name: "> Rejoint le:",
                    value: moment.utc(membre.joinedAt).format("LLL")
                }
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }
        }
    })
}

module.exports.help = {
    name: "stat"
}