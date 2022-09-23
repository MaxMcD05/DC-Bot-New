const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hifive')
		.setDescription('gimme five'),
	async execute(interaction) {
		await interaction.reply(`✋`);
	},
};