const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();
    channel = client.channels.cache.get(process.env.logchannelid);
    channel.send({embed: {
        color: "#404dff",
        description: `<@${message.author.id}> has promoted ${username} from ${rankNameInGroup} (${rankInGroup}) to ${promoteResponse.newRole.name} (${promoteResponse.newRole.rank}).`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        },
        footer: {
            text: 'Action Logs'
        },
        timestamp: new Date(),
        thumbnail: {
            url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&format=png&username=${username}`
        }
    }});
}
