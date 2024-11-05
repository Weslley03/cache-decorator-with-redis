import 'dotenv/config';

export const cacheConfig = {
  useRedis: process.env.USE_REDIS === 'true',
  defaultTTL: Number(process.env.DEFAULT_TTL),
  redis: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD,
  },
};