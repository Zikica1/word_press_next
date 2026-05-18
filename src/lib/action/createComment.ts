'use server';

import Comments from '../models/Comments';
import { commentSchema } from '../validators/commentSchema';
import connectDB from '../db';
import { z } from 'zod';
import { limiter } from '@/config/limiter';
import { FormStateCom } from '../../../types';

const createComment = async (
  slug: string,
  prevState: FormStateCom,
  formData: FormData,
): Promise<FormStateCom> => {
  const remaining = await limiter.removeTokens(1);
  if (remaining < 0) {
    return {
      success: false,
      errors: {
        form: ['To many request!'],
      },
    };
  }

  const data = {
    idPost: slug,
    name: String(formData.get('name') || ''),
    email: String(formData.get('email') || ''),
    comment: String(formData.get('comment') || ''),
  };

  const result = commentSchema.safeParse(data);

  if (!result.success) {
    const error = z.flattenError(result.error);

    return {
      success: false,
      errors: error.fieldErrors,
    };
  }

  await connectDB();

  try {
    await Comments.create(result.data);
  } catch (err) {
    console.error(err);
  }

  return {
    success: true,
    errors: {},
  };
};

export default createComment;
