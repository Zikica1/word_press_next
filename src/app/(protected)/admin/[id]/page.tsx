import styles from './AdminMes.module.css';
import { getMessageFromDB } from '@/lib/action/getMessage';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const message = await getMessageFromDB(id);

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{message.subject}</h3>
      <p className={styles.para}>{message.text}</p>
    </section>
  );
};

export default page;
