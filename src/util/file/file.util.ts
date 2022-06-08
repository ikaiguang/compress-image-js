import fs, { MakeDirectoryOptions } from 'fs';
import { Buffer } from 'buffer';
import * as path from 'path';

// DefaultFileMode 默认文件权限
export const DefaultFileMode: fs.Mode = '0744';

// ReadFileSync 读取文件
export function ReadFileSync(path: string): Buffer {
  return fs.readFileSync(path, { flag: 'r' });
}

// WriteFileSync 写文件
export function WriteFileSync(path: string, data: ArrayBuffer): void {
  fs.writeFileSync(path, new DataView(data));
}

// CreateDirSync 创建目录
export function CreateDirSync(dir: string) {
  fs.mkdirSync(dir, {
    mode: DefaultFileMode,
    recursive: true,
  });
}

// CreateDirSyncFromFilename 创建目录；来自文件
export function CreateDirSyncFromFilename(filename: string) {
  let dir = path.dirname(filename);
  if (fs.existsSync(dir)) {
    return;
  }
  CreateDirSync(dir);
}
