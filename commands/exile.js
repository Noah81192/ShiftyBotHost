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
var username = args[1]
        if(username){
             message.channel.send(`Serching for ${username}`)
             noblox.getIdFromUsername(username)
             .then(function(id){
                 noblox.getRankInGroup(groupId, id)
                    message.channel.send(`Userid: ${id}, Is kickable`)
                         noblox.exile(groupid, id)
                         .then(function(){
                             message.channel.send(`Kicked ${id}!`)
                         }).catch(function(err){
                             message.channel.send("Critcal Error Logged to the console")
                             console.log(err)
                         });
                        }).catch(function(err){
                            message.channel.send("Fail To Kick!")
                    }).catch(function(err){
                        message.channel.send("Player is not in the group!")
                }).catch(function(err){
                    message.channel.send("That player is not in the group!")
                });
            } else {
                message.channel.send("That username does not on roblox!")
            }
    return;
}
