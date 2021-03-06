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
    let shoutResponse;
    try {
        shoutResponse = await roblox.shout(Number(process.env.groupId), msg);
    } catch (err) {
        console.log(chalk.red('An error occured when running the shout command: ' + err));
        return message.channel.send({embed: {
            color: "#ff4040",
            description: `Oops! An unexpected error has occured. It has been logged to the bot console.`,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
    message.channel.send({embed: {
        color: "#404dff",
        description: `**Success!** Posted group shout:\n`
        + `\`\`\`${msg}\`\`\``,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
    if(process.env.logchannelid === 'false') return;
    let logchannel = message.guild.channels.cache.get(process.env.logchannelid);
    logchannel.send({embed: {
        color: "#404dff",
        description: `<@${message.author.id}> has posted a group shout:\n`
        + `\`\`\`${msg}\`\`\``,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        },
        footer: {
            text: 'Action Logs'
        },
        timestamp: new Date()
    }});
}
