const fs = require('fs');
const path = require('path');
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

client.once('ready', () => {
    console.log('Ready!');
});
//bot on
client.on('message', message => {
    if (message.author.bot) return false;

    console.log(`Message from ${message.author.username}: ${message.content}`);
//reading message if translate: is used
    if (message.content.startsWith('translate: ')) {
        for (var word of dictionary) {
            console.log(word);
            if (message.content.includes(word.e)) {
                message.channel.send(`${word.c} ${message.member}`);
            } //looking for e or c to determine if it should get english counter or chinese
            if (message.content.includes(word.c)) {
                message.channel.send(`${word.e} ${message.member}`);
            }
        }
    }
//api code
    fetch('https://translate.google.com/?sl=auto&tl=zh-CN&op=translate', {
        method: "POST", // specify string
        body: message.content // specify the string to post in the body of the request
    })
        .then(response => response.json())
        .then(data => {
            // Extract the value you want from the data object
            let value = data.translation;
            //c and e output
        })
        .catch(error => {
        });

    .then(response => {
        return response.json();
    }) //returning api value back
    .then(jsonResponse => {
        if (message.content.c === word.c) {
            return word.e;
        } else if (message.content.c === word.e) {
            return word.c;
        }
    });
});
//displaying what was brought back to form reply
client.on('interactionCreate', async interaction => {

    function translate(text, opts) {
        opts = opts || {};
        //linkage to api code
        var e;
        [opts.from, opts.to].forEach(function (lang) {
            if (lang && !languages.isSupported(lang)) {
                e = new Error();
                e.code = 400;
                e. message = 'The language \'' + lang + '\' is not supported'};

				if (!interaction.isChatInputCommand()) return;
			
				const command = client.commands.get(interaction.commandName);
				if (!command) return;
			
				try {
					await command.execute(interaction);
				} catch (error) {
					console.error(error);
					await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
				}
			
				return result;
			}).catch(function (err) {
				var e;
				e = new Error();
				if (err.statusCode !== undefined && err.statusCode !== 200) {
					e.code = 'BAD_REQUEST';
				} else {
					e.code = 'BAD_NETWORK';
				}
				throw e;
			});
			
			module.exports = translate;
			module.exports.languages = languages;
			
			client.login(token);