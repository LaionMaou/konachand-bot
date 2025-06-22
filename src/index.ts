import { Client, GatewayIntentBits } from 'discord.js';
import { initWebSocket } from './ws';
import dotenv from 'dotenv';
import { handleMessage } from './events/message';

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on('ready', () => {
  console.log(`✅ Conectado como ${client.user?.tag}`);
  initWebSocket(client);
});

client.on('messageCreate', async (msg) => {
  if (!msg.author.bot) {
    handleMessage(msg);
  }
});

client.login(process.env.DISCORD_TOKEN);
