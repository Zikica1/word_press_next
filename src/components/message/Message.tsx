'use client';
import styles from './Message.module.css';
import { useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoMdTrash } from 'react-icons/io';
import { formatDate } from '@/lib/utils/formatDate';
import { MessageProps } from '../../../types';

const Message = (message: MessageProps) => {
  const [isPending, startTransition] = useTransition();
  const formatData = formatDate(message.createdAt);

  const router = useRouter();

  const text =
    message.text.length <= 50
      ? message.text
      : `${message.text.slice(0, 40)}...`;

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Delete failed');
      }

      startTransition(() => {
        router.refresh();
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ul className={styles.listWrapper}>
      <li className={styles.listItem}>
        <div>
          <p>{formatData}</p>
          <Link href={`/admin/${message._id}`}>
            <h3 className={styles.listItemHeadline}>{message.subject}</h3>
            <p>{text}</p>
          </Link>
        </div>
        <button
          disabled={isPending}
          onClick={handleDelete}
          className={styles.buttonDel}
        >
          <IoMdTrash />
        </button>
      </li>
    </ul>
  );
};

export default Message;
