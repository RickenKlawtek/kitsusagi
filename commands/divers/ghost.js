const { Command } = require('discord.js-commando');

module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ghost',
			memberName: 'ghost',
			group: 'divers',
			aliases: [],
            description: 'Envoi un msg im a ghost bitch!.',
            clientPermissions: ['SEND_MESSAGES'], // le bot doit avoir la permission d'envoyer des messages
			userPermissions: ['ADMINISTRATOR'], // l'utilisateur doit être administrateur pour exécuter la commande
	                guildOnly: false,
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
		});
	}

	async run(msg) {
            msg.say(`I\'m ghost Bitch!`);
	}
};