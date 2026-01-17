import { MinecraftServer } from '@/types';
import mcServer from '@/data/minecraft-server.json';

export function getMinecraftServer(): MinecraftServer {
  return mcServer;
}

export function getServerEvents() {
  return mcServer.events || [];
}
