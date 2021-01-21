const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hugt',
			memberName: 'hugt',
			group: 'divers',
			description: 'hug test.',
			clientPermissions: ['SEND_MESSAGES'], // le bot doit avoir la permission d'envoyer des messages
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
	                args: [
			        {
			                key: 'text',
			                prompt: 'Vous souhaitez envoyez un calin à qui ?',
                            type: 'string',
                            default: 'vous même.'
			        },
	                ],
		});
	}

	async run(msg, { text }) {
		msg.say(`Vous faite un calin à ${text}.`);
	}
};