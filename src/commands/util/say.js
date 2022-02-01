const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')

module.exports = new Command({
	name: 'say',
	description: 'Mostra o icone do servidor',
	aliases: ['falar','fale'],
	usage: {
		op: 'none',
		ob: 'say <texto>'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		let embed = new Discord.MessageEmbed()
		.setTitle(`Sintaxe da ${client.user.username}`)
		.setColor(`#FF0000`)
		.setDescription(`\`\`${prefix}say\`\` => Faça eu falar alguma coisa!`)
		.addFields(
			{
				name: ':grey_question: Como usar?',
				value: `\`\`${prefix}say\`\` <texto>`
			},
			{
				name:`:pencil: Exemplo:`,
				value: `\`\`${prefix}say\`\` a ${client.user.username} é minha amiga❤\n\`\`${prefix}say\`\` Eu gosto de batatas🍟`
			},
			{
				name: ':compass: Aliases:',
				value: `\`\`falar, fale\`\``
			}
			)
		.setFooter(`By toto`,`${client.user.avatarURL({dinamyc: true})}`)
		
		if (!args[0]) {
			return message.reply({embeds: [embed]}).then(msg => {
				msg.react('❓')
			})
		}
		if (args.length > 0){
			message.delete()
			message.channel.send(`${args.join(" ")}`)
		}
	}
})