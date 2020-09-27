import { LoggerAdapter } from '@/logger/logger-adapter';

export class SentryAdapter implements LoggerAdapter.ILoggerAdapter {
  send (type: string, data: string): void {
    // implementação de erro no sentry
    alert(`erro: ${data}`);
  }
}
