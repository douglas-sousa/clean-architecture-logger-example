import { Logger } from '@/presentation/logger/logger';
import { LoggerAdapter } from './logger-adapter';

export class ScreenLogger implements Logger.ILogger {
  constructor (private readonly adapter: LoggerAdapter.ILoggerAdapter) {}

  event (type: Logger.Type, data: Logger.Data): void {
    this.adapter.send(type as LoggerAdapter.Type, data.name as string);
  }
}
