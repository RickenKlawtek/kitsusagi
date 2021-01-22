const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

// Notre préfixe de commande
const prefixCmd = '=';

client.on("ready", () => {
    console.log("I'm ghost bitch !");
});

client.on("message", msg => {

    // Si le message n'est pas préfixé ou qu'il vient d'un autre bot, nous l'ignorons
    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    // Si nous arrivons jusque ici, alors c'est une commande

    // Nous convertissons la commande sous forme de tableau en prenant soin de retirer le préfixe
    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    // Extraction du premier élément de 'args', ce qui correspond à la commande
    const command = args.shift().toLowerCase();

    // À ce stade, args est un tableau ne contenant que les arguments étant donné que la commande a été extraite de celui-ci

    // On se sert maintenant de la varibale 'command' pour le test
    if (command === "ping") {
        msg.reply("pong");
    }
    else if(command === "hellow") {
        let str = "Hell low <@" + msg.author.id + ">.";
        msg.channel.send(str);
    //    msg.reply("Hellow");
    }
    else if (message.content === "server") {
        msg.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
});

    // Create an event listener for messages
client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'hey batard mon avatar') {
      // Send the user's avatar URL
      message.reply(message.author.displayAvatarURL());
    }
    else if (message.content === 'C\'est qui la plus belle ?') {
        // Send the user's avatar URL
        let str = "C'est Kitsune <3"
        message.channel.send(str);
      }
  });

client.login(process.env.BOT_TOKEN);