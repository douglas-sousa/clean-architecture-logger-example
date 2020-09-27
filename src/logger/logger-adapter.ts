import { Logger } from '@/presentation/logger/logger';

export namespace LoggerAdapter {
  export type Type = Logger.Type;

  export interface ILoggerAdapter {
    send: (type: LoggerAdapter.Type, data: string) => void;
  }
}
