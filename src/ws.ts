import WebSocket from 'ws';
import { Client } from 'discord.js';

let ws: WebSocket;

export function initWebSocket(client: Client) {
  ws = new WebSocket(process.env.WS_SERVER!);

  ws.on('open', () => console.log('🌐 WebSocket conectado'));
  ws.on('close', () => console.log('🔌 WebSocket desconectado'));
  ws.on('error', (err) => console.error('💥 Error WebSocket:', err));

  ws.on('message', async (raw) => {
    try {
      const data = JSON.parse(raw.toString());
      handleIncomingMessage(data, client);
    } catch (err) {
      console.error('Error al procesar mensaje WS:', err);
    }
  });
}

function handleIncomingMessage(data: any, client: Client) {
  if (data.type === 'send_message') {
    const channel = client.channels.cache.get(data.channelId);
    if (channel?.isTextBased()) {
      (channel as any).send({
        content: data.content,
        username: data.username || 'Guest',
      }).catch(console.error);
    }
  }
}

export function sendWSMessage(data: any) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(data));
  }
}
