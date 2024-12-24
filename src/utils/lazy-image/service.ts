import sharp from "sharp";
import { blurredImageCache } from "./cache";

export const getBlurredBase64 = async (src: string): Promise<string> => {
  const cached = blurredImageCache.get(src);
  if (cached) {
    return cached;
  }

  const fetchResponse = await fetch(src);
  const fetchBuffer = Buffer.from(await fetchResponse.arrayBuffer());

  const buffer = await sharp(fetchBuffer).resize(16).toBuffer();
  const result = `data:image/png;base64,${buffer.toString("base64")}`;

  blurredImageCache.set(src, result);
  return result;
};
