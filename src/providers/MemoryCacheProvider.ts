export class MemoryCacheProvider {
  private cache = new Map<string, { value: any, expiry: number }>();

  async get(key: string) {
    const cached = this.cache.get(key);
    if(cached && (cached.expiry > Date.now() || cached.expiry === 0)) {
      return cached.value;
    };
    this.cache.delete(key);
    return null;
  };

  set(key: string, value: any, ttl?: number) {
    const expiry = ttl ? Date.now() + ttl * 1000 : 0;
    this.cache.set(key, { value, expiry });
  };

  invalidate(key: string) {
    this.cache.delete(key);
  };
};