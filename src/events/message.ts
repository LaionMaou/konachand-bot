import { Message } from 'discord.js';
import { sendWSMessage } from '../ws';

export function handleMessage(msg: Message) {
  sendWSMessage({
    type: 'message',
    author: {
      name: msg.author.username,
      avatar: msg.author.displayAvatarURL(),
    },
    content: msg.content,
    timestamp: msg.createdTimestamp,
    channelId: msg.channel.id,
  });
}
