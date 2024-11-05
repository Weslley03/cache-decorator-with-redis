import { cacheConfig } from '../config/cacheConfig';

export class CacheService {
  private provider;

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