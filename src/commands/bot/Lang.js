const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
const extra = require('../../extra.js')
module.exports = new Command({
	name: 'setlang',
	description: extra.descriptions.SETLANG.description,
	category: 'Bot',
	aliases: ['infobot'],
	usage: {
		ob: "none",
		op: "none"
	},
	author: 'tomori',
	run: async (client, message, args) => {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setCustomId('pt')
				.setEmoji('🇧🇷')
				.setLabel('Primary')
				.setStyle('PRIMARY')
			)
		let u = message.author
		let mainembed = new Embed(u)
		mainembed.setTitle(extra.run.SETLANG.embed.title)
		mainembed.setDescription(extra.run.SETLANG.embed.description)
		mainembed.addField(extra.run.SETLANG.embed.fieldone.name,extra.run.SETLANG.embed.fieldone.value)
		
		message.reply({ embeds: [mainembed], components: [row] })

		const filter = i => i.customId === 'pt' && i.user.id === message.author.id;
		const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });
		collector.on('collect', async i => {
			console.log("333")
			if (i.customId === 'pt') {
				await i.update({ components: [row] });
			}
		});
	}

})