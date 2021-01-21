const { Command } = require('discord.js-commando');

module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hellow',
			memberName: 'hellow',
			group: 'divers',
			aliases: ['bonjour', 'hi'],
			description: 'Envoi un msg hell low.',
	                guildOnly: false,
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
		});
	}

	async run(msg) {
            msg.say(`Hell low, je suis ${this.client.user.tag} (\`${this.client.user.id}\`)`);
	}
};