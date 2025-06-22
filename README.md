# Konachand Bot

Bot en TypeScript que replica la funcionalidad de WidgetBot:
- Recibe mensajes de Discord y los envía a un WebSocket.
- Recibe mensajes desde el WebSocket y los publica en Discord.

## Variables de entorno

Crea un archivo `.env` basado en `.env.example` con:

DISCORD_TOKEN=...
WS_SERVER=wss://render-url.onrender.com
## Uso

```bash
npm install
npm run build
npm start

## Docker

docker build -t konachand-bot .
docker run --env-file .env konachand-bot
