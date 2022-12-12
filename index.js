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
}

 
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

		}

    if (message.author.bot) return false;

	fetch('https://www.bing.com/search?q=google+translate&cvid=db4a379e96c74e20b682143c137da279&aqs=edge.0.69i59j46j69i59j0l5j69i60j69i11004.2285j0j1&pglt=41&FORM=ANNAB1&PC=U531')
method 'Post',
body: {
	name: 'User 1'
}
});
.than(res.ok) {
	console.log('SUCCESS')
} else {
	console.log("Not Succesful")
}
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))

client.once('ready', () => {
	console.log('Ready!');

});

    console.log(`Message from ${message.author.username}: ${message.content}`);
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

client.login(token);
