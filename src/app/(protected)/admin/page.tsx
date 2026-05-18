import styles from './Admin.module.css';
import { getAllMessagesFromDB } from '@/lib/action/messages';
import Message from '@/components/message/Message';

export const revalidate = 0;

const PageAdmin = async () => {
  const messages = await getAllMessagesFromDB();
  const messagesSort = messages.reverse();

  return (
    <section className={styles.container}>
      <h1 className={styles.headline}>Messages list</h1>
      {messagesSort.map((message) => (
        <Message key={message._id} {...message} />
      ))}
    </section>
  );
};

export default PageAdmin;
