import { cacheConfig } from '../config/cacheConfig';
import { RedisCacheProvider } from '../providers/RedisCacheProvider';
import { MemoryCacheProvider } from '../providers/MemoryCacheProvider';

export class CacheService {
  private provider = cacheConfig.useRedis ? new RedisCacheProvider() : new MemoryCacheProvider();

  constructor() {};

  get(key: string) {
    return this.provider.get(key);
  };

  set(key: string, value: any, ttl?: number) {
    return this.provider.set(key, value, ttl || cacheConfig.defaultTTL)
  };

  invalidate(key: string) {
    return this.provider.invalidate(key);
  };
};