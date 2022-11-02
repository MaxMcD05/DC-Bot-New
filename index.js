const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

const dictionary = [{e:'watermelon', c:'西瓜'},{e:'apple', c:'苹果'},{e:'banana', c:'香蕉'},{e:'Strawberry', c:'草莓'},];

client.once('ready', () => {
	console.log('Ready!');
});

client.on("messageCreate", (message) => {
	if (message.author.bot) return false; 
	console.log(`Message from ${message.author.username}: ${message.content}`);
	if(message.content.toLowerCase() === 'shut ur mouth'){
		message.channel.send(`do not say that ${message.member}`);

		} else if(message.content.toLowerCase() === 'bot dif'){
			message.channel.send('cap, Zoid dif' + message.author);

		}else if(message.content.toUpperCase() === 'Help'){
		message.channel.send('nah' + message.author);

		}else if(message.content.toLowerCase() === 'L'){
		message.channel.send('Tis what i am saying' + message.author);

		}
		if(message.content.startsWith('translate: ')){
			for (var word of dictionary) {
				console.log(word);
				if(message.content.includes(word.e)){
					message.channel.send(`${word.c} ${message.member}`);
				}
				if(message.content.includes(word.c)){
					message.channel.send(`${word.e} ${message.member}`);
				}				

			}
//			if(message.content.includes('watermelon')){
//				message.channel.send(`西瓜 ${message.member}`);
//			}
		}
/*
		}else if(message.content.toLowerCase() === 'translate: apple'){
		message.channel.send('苹果' + message.author);

		}else if(message.content.toLowerCase() === 'translate: banana'){
		message.channel.send('香蕉' + message.author);

		}else if(message.content.toLowerCase() === 'translate: Strawberry'){
		message.channel.send('草莓' + message.author);

		}else if(message.content.toLowerCase() === 'translate: Grape'){
		message.channel.send('葡萄' + message.author);

		}else if(message.content.toLowerCase() === 'translate: Orange'){
		message.channel.send('橘子' + message.author);

		}else if(message.content.toLowerCase() === 'translate: 橘子'){
		message.channel.send('Orange' + message.author);

		}else if(message.content.toLowerCase() === 'translate: Dog'){
		message.channel.send('狗' + message.author);

		}else if(message.content.toLowerCase() === 'translate: 狗'){
		message.channel.send('Dog' + message.author);

		}else if(message.content.toLowerCase() === 'translate: Cat'){
		message.channel.send('猫' + message.author);

		}else if(message.content.toLowerCase() === 'translate: 猫'){
		message.channel.send('Cat' + message.author);
	
		}else if(message.content.toLowerCase() === 'translate: Chicken'){
		message.channel.send('鸡' + message.author);

		}else if(message.content.toLowerCase() === 'translate: 鸡'){
		message.channel.send('Chicken' + message.author);

		}else if(message.content.toLowerCase() === 'translate: Dolphin'){
		message.channel.send('海豚' + message.author);

		}else if(message.content.toLowerCase() === 'translate: 海豚'){
		message.channel.send('Dolphin' + message.author);

		}else if(message.content.toLowerCase() === 'translate: Gorilla'){
		message.channel.send('大猩猩' + message.author);

		}else if(message.content.toLowerCase() === 'translate: 大猩猩'){
		message.channel.send('Gorilla' + message.author);
	}
	*/
  });

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}

	client.on('message', message => {

});
});

client.login(token);