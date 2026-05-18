import styles from './LogoutButton.module.css';
import { logOut } from '@/lib/action/auth/logout';

const LogoutButton = () => {
  return (
    <form action={logOut}>
      <button className={styles.logoutButton} type='submit'>
        Logout
      </button>
    </form>
  );
};

export default LogoutButton;
