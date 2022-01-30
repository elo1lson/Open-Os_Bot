const simplydjs = require("simply-djs")
const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const Command = require('../../structures/command/command.js')

module.exports = new Command({
	category: 'Fun',
	name: 'tictactoe',
	description: 'Que tal jogar um jogo da velha??',
	aliases: ['jogodavelha'],
	usage: {
		op: 'none',
		ob: '<@usuário>'
	},
	author: 'tomori',
	run: async (client, message, args) => {
		simplydjs.chatbot(client, message, {
			chid: 912886408778236005
		});
	}
})