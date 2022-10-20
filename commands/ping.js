const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Mush\'s bot will reply with Pong!');

		
module.exports = {
	data,
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};