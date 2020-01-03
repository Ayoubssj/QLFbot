module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name: "Sam ce feuj"
        }
    })
};