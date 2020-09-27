import { Logger } from '@/presentation/logger/logger';
import { LoggerAdapter } from './logger-adapter';

export class ErrorLogger implements Logger.ILogger {
  constructor (private readonly adapter: LoggerAdapter.ILoggerAdapter) {}

  event (type: Logger.Type, data: Logger.Data): void {
    this.adapter.send(type, data.msg || 'unknown error');
  }
}
