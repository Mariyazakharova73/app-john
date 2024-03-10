import styles from './NotificationContent.module.css';

interface ContentProps {
  id: string;
  notificationConfig: any;
}

export const InfoContent = ({ notificationConfig }: ContentProps) => {
  return (
    <div className={styles.containerSuccess}>
      <p className={styles.title}>Информация:</p>
      <p className={styles.text}>{notificationConfig?.message}</p>
    </div>
  );
};
