'use client';

import styles from './BloForm.module.css';
import { useActionState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShare } from 'react-icons/md';
import createComment from '@/lib/action/createComment';

const initialState = {
  success: false,
  errors: {},
};

const BloForm = ({ slug }: { slug: string }) => {
  const [state, formAction] = useActionState(
    createComment.bind(null, slug),
    initialState,
  );

  return (
    <>
      <div className={styles.blogTagsDetail}>
        <p>Tags: Blog</p>
        <div>
          <FaRegHeart />
          <MdOutlineShare />
        </div>
      </div>
      <div className={styles.blogCommentDetail}>
        <h3>Add a Comment</h3>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>

        {state.errors?.form && <p>{state.errors.form}</p>}
        <form
          action={formAction}
          key={state.success ? 'reset' : 'form'}
          className={styles.formBlog}
        >
          <div>
            <label htmlFor='name'>
              <input
                type='text'
                placeholder='Name*'
                required
                id='name'
                name='name'
              />
            </label>
            {state.errors?.name && <p>{state.errors.name[0]}</p>}
            <label htmlFor='email'>
              <input
                type='email'
                placeholder='E-Mail *'
                required
                id='email'
                name='email'
              />
            </label>
            {state.errors?.email && <p>{state.errors.email[0]}</p>}
          </div>
          <label htmlFor='comment'>
            <textarea
              placeholder='Comment'
              id='comment'
              name='comment'
            ></textarea>
          </label>
          {state.errors?.comment && <p>{state.errors.comment[0]}</p>}
          <button type='submit'>Submit</button>

          {state.success && <p>Message sent!</p>}
        </form>
      </div>
    </>
  );
};

export default BloForm;
