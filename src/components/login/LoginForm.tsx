'use client';
import styles from './LoginForm.module.css';
import { useActionState } from 'react';
import { loginUser } from '@/lib/action/auth/loginUser';
import { FormState } from '../../../types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import LogoutButton from '../button/LogoutButton';
// import { useRouter } from 'next/navigation';

const initialState: FormState = {
  success: false,
  errors: {},
};

const Auth = () => {
  const [state, formAction] = useActionState(loginUser, initialState);

  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/';

  // const router = useRouter();

  // useEffect(() => {
  //   if (state.success) {
  //     window.location.href = from;
  //     router.refresh();
  //     router.push(from);
  //   }
  // }, [state.success, router, from]);

  return (
    <section className={styles.register}>
      <div className={styles.registerWrapper}>
        {state.errors?.form && <p>{state.errors.form[0]}</p>}
        <form
          action={formAction}
          key={state.success ? 'reset' : 'form'}
          className={styles.formRegister}
        >
          <input type='hidden' name='from' value={from} />
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' id='password' required />
          {state.errors?.password && <p>{state.errors.password[0]}</p>}
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' required />

          {state.errors?.email && <p>{state.errors.email[0]}</p>}
          <button>Sign in</button>
          <div className={styles.persistCheck}>
            <input type='checkbox' name='remember' id='remember' value='true' />
            <label htmlFor='persist'>Remember me</label>
          </div>
        </form>
        <p>
          Need an Account?
          <br />
          <span className={styles.line}>
            <Link href='/register'>Sign up</Link>
          </span>
        </p>
        <LogoutButton />
      </div>
    </section>
  );
};

export default Auth;
