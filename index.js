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

    fetch('https://translate.google.com/?sl=auto&tl=zh-CN&op=translate', {
        method: "POST", // specify string
        body: message.content // specify the string to post in the body of the request
    })
    .then(response => {
        return response.json();
    })
    .then(jsonResponse => {
        if (message.content.c === word.c) {
            return word.e;
        } else if (message.content.c === word.e) {
            return word.c;
        }
    });
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
});

client.login(token);