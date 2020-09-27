export namespace Logger {
  export type Type = 'error' | 'action' | 'screen';

  export type Data = {
    msg?: string;
    name?: string;
  }

  export interface ILogger {
    event: (type: Logger.Type, data: Logger.Data) => void;
  }
}
