'use client';
import styles from './ContactInfoForm.module.css';
import { useActionState } from 'react';
import { postMessage } from '@/lib/action/postMessage';
import { SubmitButton } from '../button/submitButton';
import { FormState } from '../../../types';

const initialState: FormState = {
  success: false,
  errors: {},
};

const ContactInfoForm = () => {
  const [state, formAction] = useActionState(postMessage, initialState);

  return (
    <form
      action={formAction}
      key={state.success ? 'reset' : 'form'}
      className={styles.contactForm}
    >
      <div>
        <label htmlFor='name'>
          <input
            name='name'
            id='name'
            placeholder='Your Name*'
            type='text'
            autoComplete='off'
            required
          />
        </label>
        {state.errors?.name && <p>{state.errors.name[0]}</p>}
        <label htmlFor='email'>
          <input
            type='email'
            name='email'
            id='email'
            autoComplete='off'
            placeholder='Your Email*'
            required
          />
        </label>
        {state.errors?.email && <p>{state.errors.email[0]}</p>}
      </div>
      <label htmlFor='subject'>
        <input
          type='text'
          name='subject'
          id='subject'
          placeholder='Subject*'
          required
        />
      </label>
      {state.errors?.subject && <p>{state.errors.subject[0]}</p>}
      <label htmlFor='question'>
        <textarea
          className={styles.textarea}
          name='text'
          id='text'
          placeholder='Question*'
          required
        ></textarea>
      </label>
      {state.errors?.text && <p>{state.errors.text[0]}</p>}
      <SubmitButton />

      {state.success && <p>Message sent!</p>}
    </form>
  );
};

export default ContactInfoForm;
