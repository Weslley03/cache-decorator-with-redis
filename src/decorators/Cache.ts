import { CacheService } from "../services/CacheService";

export function Cache(ttl?: number) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      const cacheService = new CacheService();
      const key = `${propertyKey}_${JSON.stringify(args)}`;

      const cacheResult = await cacheService.get(key);
      if(cacheResult) return cacheResult;

      const result = await originalMethod.apply(this, args);
      await cacheService.set(key, result, ttl);
      
      return result;
    };
    return descriptor;
  };
};

