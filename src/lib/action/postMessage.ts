'use server';

import { revalidatePath } from 'next/cache';
import Messages from '../models/Messages';
import { messageSchema } from '../validators/messageSchema';
import { z } from 'zod';
import connectDB from '../db';
import { limiter } from '@/config/limiter';
import { FormStateMessage } from '../../../types';

// type FormState = {
//   success: boolean;
//   errors: Record<string, string[] | undefined>;
// };

export const postMessage = async (
  prevState: FormStateMessage,
  formData: FormData,
): Promise<FormStateMessage> => {
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
    name: String(formData.get('name') || ''),
    email: String(formData.get('email') || ''),
    subject: String(formData.get('subject') || ''),
    text: String(formData.get('text') || ''),
  };

  const result = messageSchema.safeParse(data);

  if (!result.success) {
    const error = z.flattenError(result.error);

    return {
      success: false,
      errors: error.fieldErrors,
    };
  }

  await connectDB();

  try {
    await Messages.create(result.data);
  } catch (err) {
    console.error(err);
  }

  revalidatePath('/admin');

  return {
    success: true,
    errors: {},
  };
};
