import { LoggerAdapter } from '@/logger/logger-adapter';

export class FirebaseAdapter implements LoggerAdapter.ILoggerAdapter {
  send (type: LoggerAdapter.Type, data: string): void {
    switch (type) {
      case 'action':
        /* implementação de ação no firebase */
        return alert(data);
      case 'screen':
        /* implementação de visita no firebase */
        return alert(data);
    }
  }
}
