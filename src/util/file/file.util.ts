import fs, { NoParamCallback } from 'fs';
import { Buffer } from 'buffer';

// ReadFile 读取文件
export function ReadFile(path: string): Buffer {
  return fs.readFileSync(path, { flag: 'r' });
}

// WriteFile 写文件
export function WriteFile(
  path: string,
  data: ArrayBuffer,
  callback: NoParamCallback
): void {
  fs.writeFile(path, new DataView(data), callback);
}
