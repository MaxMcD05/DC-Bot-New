const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

 
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	client.commands.set(command.data.name, command);
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
}


client.once('ready', () => {
	console.log('Ready!');
});

client.on("messageCreate", (message) => {
	if (message.author.bot) return false; 
	console.log(`Message from ${message.author.username}: ${message.content}`);
	

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
  };
    console.log(`Message from ${message.author.username}: ${message.content}`);


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
fetch('https://translate.google.com/?sl=auto&tl=zh-CN&op=translate',{
method: "POST", // specify that you want to post the string
body: message.content}) // specify the string to post in the body of the request

  .then(response => {
    return response.json();
  })
  .then(jsonResponse => {
	if ${message.content.c} = ${word.c}, then((return) ${word.e});
	else ${message.content.c} = ${word.e}, then((return) ${word.c});
});


client.login(token);