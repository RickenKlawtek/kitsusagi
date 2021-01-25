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
    
    else if (message.content.startsWith('!kiss')) {
        // Assuming we mention someone in the message, this will return the user
        // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
          // Now we get the member from the user
          const member = message.guild.members.resolve(user);
          // If the member is in the guild
          if (member) {
            /**
             * Kick the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             */
            member
                const embed = new MessageEmbed()
                // Set the title of the field
                .setTitle('No game, No life, Just a kiss')
                // Set the color of the embed
                .setColor(0xff0000)
                // Set the main content of the embed
                .setDescription('<@" + user.tag + ">,vous recevez un kiss de <@" + msg.author.id + "> <3');
                // Send the embed to the same channel as the message
                //.image('https://i.pinimg.com/originals/3c/16/79/3c167989c5623e40ef517ded7e3c44e2.gif');
                message.channel.send(embed);
              
          } else {
            // The mentioned user isn't in this guild
            message.channel.send("Cette personne n'existe que dans vos rêves.. THIS A GHOST BITCH !");
          }
          // Otherwise, if no user was mentioned
        } else {
            
            const embed = new MessageEmbed()
            // Set the title of the field
            .setTitle('No game, No life, Just a kiss')
            // Set the color of the embed
            .setColor(0xff0000)
            // Set the main content of the embed
            .setDescription('<@" + msg.author.id + ">,vous vous embrassez vous même <3');
            // Send the embed to the same channel as the message
          //  .image('https://i.pinimg.com/originals/3c/16/79/3c167989c5623e40ef517ded7e3c44e2.gif');
            message.channel.send(embed);
          //message.channel.send("You didn't mention the user to kick!");
        }
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
    else if (message.content === 'hey batard') {
        // Send the user's avatar URL
        let str = "MOUAHAHAHAHA ';...;'"
        message.channel.send(str);
      }
    else if (message.content === 'CERVEAU') {
        // Send the user's avatar URL
        let str = "TUNNNNEL !!!"
        message.channel.send(str);
      }
    else if (message.content === 'cerveau') {
        // Send the user's avatar URL
        let str = "Votre correspondant est injoigagnable !"
        message.channel.send(str);
      }
    else if (message.content === '<3') {
        // Send the user's avatar URL
        let str = "Ca sent l'amour ici <3"
        message.channel.send(str);
      }
    else if (message.content === 'kiss') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('No game, No life, Just a kiss')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('<@" + msg.author.id + "> envoi un kiss <3');
      // Send the embed to the same channel as the message
      //  .image('https://i.pinimg.com/originals/3c/16/79/3c167989c5623e40ef517ded7e3c44e2.gif');
      message.channel.send(embed);
    }
  });

client.login(process.env.BOT_TOKEN);