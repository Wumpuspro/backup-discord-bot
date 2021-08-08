const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  let help = new Discord.MessageEmbed()
    .setAuthor("help list")
    .setTitle("Command List & Guide for the Bot")
    .setDescription(
      "Below are Commands you can do with Bot."
    )
    .addField(
      "Backup Commands",
     "Say [x!info-backup(id)]"
    )

    .addField(
      "Backup Load Commands",
      "Say [x!load-backup]"
    )

    .addField(
      "Backup create Commands",
      "Say [x!make-backup]"
    )
 
    .addField("? Information ?", "stats", true)
    .addField("Bot Invite Link!", "[Invite me To Your Server!](https://discord.com/oauth2/authorize?client_id=867625782184640532&permissions=8&scope=bot)")
    .setTimestamp()
    .setFooter(
      `Command Requested By ${message.author.tag}`,
      client.user.displayAvatarURL(),
      message.delete()
    );
  message.channel.send(help);
