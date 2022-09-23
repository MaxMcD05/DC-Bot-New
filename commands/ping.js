const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Mush\'s bot will reply with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};