const { Client, Intents } = require(`discord.js`);
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

require(`dotenv`).config();

(async () => {
    client.login(process.env.token)
})();

client.on(`ready`, () => {
    console.log(`Bot Online!`);
});