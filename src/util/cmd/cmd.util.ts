import {execFile, execFileSync, ExecFileException} from "node:child_process";

// IExecCommandResult 执行命令行结果
export interface IExecCommandResult {
  _isIExecCommandResult: boolean,
  error: ExecFileException | null,
  stdout: string,
  stderr: string,
}

// IsIExecCommandResult 是执行命令结果
export function IsIExecCommandResult(result: IExecCommandResult): boolean {
  return result._isIExecCommandResult !== undefined
}

// FromIExecCommandResult 是否是类型：IExecCommandResult
export function FromIExecCommandResult(result: any): boolean {
  return IsIExecCommandResult(result as IExecCommandResult)
}

// ExecCommand 执行命令；不阻塞进程
export async function ExecCommand(shell: string, commandArgs: ReadonlyArray<string>) {
  return new Promise((resolve, reject) => {
    execFile(shell, commandArgs, (error, stdout, stderr) => {
      let result: IExecCommandResult = {
        _isIExecCommandResult: true,
        error: error,
        stdout: stdout,
        stderr: stderr,
      }
      if (error) {
        reject(result)
      }
      resolve(result);
    });
  });
}

// ExecCommandSync 执行命令
export function ExecCommandSync(shell: string, commandArgs: ReadonlyArray<string>): string {
  return execFileSync(shell, commandArgs, {encoding: "utf-8"})
}
