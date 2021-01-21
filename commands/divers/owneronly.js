const { Command } = require('discord.js-commando');

module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'owner',
			memberName: 'owner',
			group: 'divers',
			description: 'Réponds avec luv parents.',
	                ownerOnly: true, // Uniquement le propriétaire du bot pourra lancer cette commande
		});
	}

	async run(msg) {
                msg.say(`J\'aime mes parents <3`);
	}
};