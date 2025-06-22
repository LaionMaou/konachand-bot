import WebSocket from 'ws';

let ws: WebSocket;

export function initWebSocket() {
  ws = new WebSocket(process.env.WS_SERVER!);
  ws.on('open', () => console.log('🌐 WebSocket conectado'));
  ws.on('close', () => console.log('🔌 WebSocket desconectado'));
  ws.on('error', (err) => console.error('💥 Error WebSocket:', err));
}

export function sendWSMessage(data: any) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(data));
  }
}
