import { Store } from 'react-notifications-component';
import { ErrorContent } from './ErrorContent';
import { InfoContent } from './InfoContent';

export const InfoNotification = (message: string): void => {
  Store.addNotification({
    content: InfoContent,
    message: message,
    insert: 'bottom',
    container: 'top-right',
    dismiss: {
      duration: 2000,
    },
  });
};

export const ErrorNotification = (message: string): void => {
  Store.addNotification({
    content: ErrorContent,
    message: message,
    insert: 'bottom',
    container: 'top-right',
    dismiss: {
      duration: 2000,
    },
  });
};
