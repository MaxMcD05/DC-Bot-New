const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('funfact')
		.setDescription('Mush\'s bot will whisper you a fun fact!'),
	async execute(interaction) {
		let msg = "I couldn't think of a good secret!";
		const fact = Math.floor(Math.random()*10);
		switch (fact){
			case 0:
				msg = "Dolphins sleep with one eye open."
				break;
			case 1:
				msg = "Vacuum cleaners were originally horse-drawn."
				break;
			case 2:
				msg = "McDonald's introduced drive-through service due to the military."
				break;
			case 3:
				msg = "Alfred Hitchcock was frightened of eggs."
			break;
			case 4:
				msg = "Pigs don't sweat."
			break;
			case 5:
				msg = "There's a LEGO bridge in Germany that you can walk across."
			break;
			case 6:
				msg = "Squirrels are behind most power outages in the U.S."
			break;
			case 7:
				msg = "Spider webs were used as bandages in ancient times."
			break;
			case 8:
				msg = "One quarter of all your bones are located in your feet."
			break;
			case 9:
				msg = "Blood donors in Sweden receive a text when their blood is used."
			break;
		}	
		await interaction.reply({content: msg, ephemeral: true });
		await wait(2000);
		await interaction.channel.send({content: `${interaction.member} just learned a new fun fact!`});

	},
};