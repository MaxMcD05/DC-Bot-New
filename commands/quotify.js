const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
	.setName('quotify')
	.setDescription('Write a fancy-lookin\' quote!')
	.addStringOption(option =>
		option.setName('quote')
			.setDescription('What\'s the quote')
			.setRequired(true))
	.addStringOption(option =>
		option.setName('author')
			.setDescription('The author of this beautiful quote')
			.setRequired(true));


module.exports = {
	data,
	async execute(interaction) {
		/*console.log(interaction.options);
		for (option of interaction.options._hoistedOptions){
			console.log(option.value);
		}*/
		let quote = interaction.options.getString('quote');
		let author = interaction.options.getString('author');
		await interaction.reply(`\`\`\`${quote}\`\`\` - ${author}`);
	},
};