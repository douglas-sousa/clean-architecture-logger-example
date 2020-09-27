import { Logger } from '@/presentation/logger/logger';
import { ErrorLogger } from './error-logger';
import { ActionLogger } from './action-logger';
import { ScreenLogger } from './screen-logger';

export class LoggerStrategy implements Logger.ILogger {
  constructor (
    private readonly errorLogger: ErrorLogger,
    private readonly actionLogger: ActionLogger,
    private readonly screenLogger: ScreenLogger
  ) {}

  event (type: Logger.Type, data: Logger.Data): void {
    switch (type) {
      case 'error': return this.errorLogger.event(type, data);
      case 'action': return this.actionLogger.event(type, data);
      case 'screen': return this.screenLogger.event(type, data);
    }
  }
}
