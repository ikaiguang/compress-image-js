import fs from 'fs';
import { Buffer } from 'buffer';

// ReadFile 读取文件
export function ReadFile(path: string): Buffer {
  return fs.readFileSync(path, { flag: 'r' });
}
