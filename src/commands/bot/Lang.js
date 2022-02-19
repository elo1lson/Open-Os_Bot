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
				.setStyle('SUCCESS')
			)
			.addComponents(
				new MessageButton()
				.setCustomId('en')
				.setEmoji('🇺🇲')
				.setStyle('DANGER')
			)
			.addComponents(
				new MessageButton()
				.setCustomId('es')
				.setEmoji('🇪🇸')
				.setStyle('DANGER')
			)
		let u = message.author
		let mainembed = new Embed(u)
		mainembed.setTitle(extra.run.SETLANG.embed.title)
		mainembed.setDescription(extra.run.SETLANG.embed.description)
		mainembed.addField(extra.run.SETLANG.embed.fieldone.name, extra.run.SETLANG.embed.fieldone.value)
		mainembed.addField(extra.run.SETLANG.embed.fieldtwo.name, extra.run.SETLANG.embed.fieldtwo.value)

		let en = new Embed(u)
		en.setTitle('✅ Sucess!')
		en.setDescription('Now my commands will all be in English')
		message.reply({ embeds: [mainembed], components: [row] })

		let pt = new Embed(u)
		pt.setTitle('✅ Sucesso')
		pt.setDescription('Agora meus comandos serão todos em português')
		
		let es = new Embed(u)
		es.setTitle('✅ Éxito')
		es.setDescription('Ahora mis comandos estarán todos en español')
		const filter = i => i.user.id === message.author.id;

		const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

		collector.on('collect', async i => {
			if (i.customId === 'pt') {
				await i.update({ embeds: [pt], components: [] });
			}
			if (i.customId === 'en') {
				await i.update({ embeds: [en], components: [] })
			}
			if (i.customId === 'es') {
				await i.update({ embeds: [es], components: [] })
			}
		});
	}
})
