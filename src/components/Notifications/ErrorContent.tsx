import styles from './NotificationContent.module.css';

interface ContentProps {
  id: string;
  notificationConfig: any;
}

export const ErrorContent = ({ notificationConfig }: ContentProps) => {
  return (
    <div className={styles.containerError}>
      <p className={styles.title}>Ошибка!</p>
      <p className={styles.text}>{notificationConfig?.message}</p>
    </div>
  );
};
