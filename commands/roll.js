const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Let\'s roll some dice!')
		.addIntegerOption(option =>
			option
				.setName('numdice')
				.setDescription('How many dice? (default 1)')
			)
		.addIntegerOption(option =>
			option
				.setName('numsides')
				.setDescription('How many sides on each of these dice? (default 6)')
			)
		.addIntegerOption(option =>
			option
				.setName('numdrop')
				.setDescription('How many dice should be dropped? (default 0)')
				.setRequired(false)
			)
		;

		
module.exports = {
	data,
	async execute(interaction) {
		let dice = interaction.options.getInteger('numdice') ?? 1;
		let sides = interaction.options.getInteger('numsides') ?? 6;
		let drop = interaction.options.getInteger('numdrop') ?? 0;
		/*if (dice===null) { dice = 1;}
		if (sides===null) { sides = 6;}
		if (drop===null) { drop = 0;}*/
		let vals = [];
		let dropped = [];
		for (var i = 0; i < dice; i++){
			vals.push(Math.floor(sides*Math.random()+1));
		}
		vals.sort(function compareFn(a, b) { return a-b});
		for (var i = 0; i < drop; i++){
			dropped.push(vals.splice(0,1));
		}

		let stringDice = "dice";
		if (dice === 1){
			stringDice = "die";
		}

		let stringDrop = "";
		let stringDropped = "";
		let stringLeft = " I got";
		if (drop > 0) {
			stringDrop = `, and got dropped ${drop} of them`;
			stringDropped = ` (*I got rid of ${dropped.join(", ")}*).`;
			stringLeft = "'s left";
		}
		await interaction.reply(`I rolled **${dice} ${stringDice}** with **${sides} sides** each${stringDrop}. Here's what${stringLeft}: **${vals.join(", ")}**.${stringDropped}`);

	},
};