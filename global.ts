import path from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

globalThis.__ROOT_DIR = path.resolve(__dirname);;

declare global {
  var __ROOT_DIR: string;
}
