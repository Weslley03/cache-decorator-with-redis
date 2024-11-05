import { createClient } from "redis";
import { cacheConfig } from "../config/cacheConfig";

export class RedisCacheProvider {
  private client = createClient({
   password: cacheConfig.redis.password,
   socket: {
    host: cacheConfig.redis.host,
    port: cacheConfig.redis.port
   } ,
  });

  async get(key: string) {
    const result = await this.client.get(key);
    return result ? JSON.parse(result) : null;
  };

  async set(key: string, value: any, ttl: number) {
    await this.client.set(key, JSON.stringify(value), { EX: ttl }); 
  };

  async invalidate(key: string) {
    await this.client.del(key);
  };
};