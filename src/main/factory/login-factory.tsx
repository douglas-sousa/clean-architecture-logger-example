import React from 'react';

import Login from '@/presentation/login/login';

import { FirebaseAdapter } from '@/infra/FirebaseAdapter';
import { SentryAdapter } from '@/infra/SentryAdapter';
import { ActionLogger } from '@/logger/action-logger';
import { ErrorLogger } from '@/logger/error-logger';
import { LoggerStrategy } from '@/logger/logger-strategy';
import { ScreenLogger } from '@/logger/screen-logger';

export default function LoginFactory (): JSX.Element {
  const sentryAdapter = new SentryAdapter();
  const firebaseAdapter = new FirebaseAdapter();

  const errorLogger = new ErrorLogger(sentryAdapter);
  const actionLogger = new ActionLogger(firebaseAdapter);
  const screenLogger = new ScreenLogger(firebaseAdapter);

  const loggerStrategy = new LoggerStrategy(errorLogger, actionLogger, screenLogger);

  return (
    <Login logger={loggerStrategy} />
  );
}
