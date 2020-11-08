const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();
    channel = client.channels.cache.get(process.env.logchannelid);
    channel.send({embed: {
        color: "#404dff",
        description: `We now have a new update where you can say !status (Status) and !setrank (User) (Rank Name)`,
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
