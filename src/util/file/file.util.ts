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
  if (ExistsSync(dir)) {
    return;
  }
  CreateDirSync(dir);
}

// ExistsSync 检查文件是否存在
export function ExistsSync(path: string): boolean {
  return fs.existsSync(path);
}

// UnlinkSync 移除文件
export function UnlinkSync(path: string): void {
  fs.unlinkSync(path);
}
