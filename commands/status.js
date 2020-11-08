const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();

exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.some(role =>["Ranking Permissions", "Shout Permissions"].includes(role.name))){
        return message.channel.send({embed: {
            color: "#ff4040",
            description: "You need the `Ranking Permissions` or `Shout Permissions` role to run this command.",
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
    let msg = args.join(' ');
    if(!msg){
        return message.channel.send({embed: {
            color: "#f7ff7a",
            description: `The message argument is required.`,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
    client.user.setActivity(args)
    message.channel.send("Set the status!")
}
