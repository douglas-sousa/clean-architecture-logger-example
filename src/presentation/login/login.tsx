import React, { useCallback, useEffect } from 'react';
import { Logger } from '@/presentation/logger/logger';

type Props = {
  logger: Logger.ILogger;
}

export default function Login ({ logger }: Props): JSX.Element {
  const signIn = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (email.length && password.length) {
      logger.event('action', { name: 'fez signIn' });
    } else {
      logger.event('error', { msg: 'email ou senha vazios' });
    }

    form.reset();
  }, []);

  useEffect(() => {
    logger.event('screen', { name: 'visitou login' });
  }, []);

  return (
    <form onSubmit={signIn}>
      <input type="email" placeholder="email" id="email" name="email" />
      <input type="password" placeholder="password" id="password" name="password" />
      <button type="submit">entrar</button>
    </form>
  );
}
