import fs from "fs";
import path from "path";

class BlurredImageCache {
  cache: Map<string, string>;
  localCachePath = path.resolve(
    __ROOT_DIR,
    "public",
    ".cache",
    "blurred-images.txt"
  );

  constructor() {
    this.cache = new Map();

    this.initLocalCache();
  }

  initLocalCache() {
    try {
      const localCache = fs.readFileSync(this.localCachePath, {
        encoding: 'utf-8'
      });
      localCache.split('\n').forEach(line => {
        const [src, value] = line.split(' ');
        this.cache.set(src, value);
      })
    } catch (err) {
      fs.writeFileSync(this.localCachePath, "", {
        encoding: "utf8",
      });
    }
  }

  pushItemToCache(src: string, value: string) {
    fs.writeFileSync(this.localCachePath, `${src} ${value}\n`, {
      flag: "a+",
    });
  }

  get(src: string) {
    return this.cache.get(src);
  }

  set(src: string, value: string) {
    this.pushItemToCache(src, value);
    return this.cache.set(src, value);
  }
}

export const blurredImageCache = new BlurredImageCache();
