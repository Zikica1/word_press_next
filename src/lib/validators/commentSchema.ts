import { z } from 'zod';
import { sanitize } from '../utils/sanitize';

export const commentSchema = z
  .object({
    idPost: z.string(),
    name: z.string().trim().min(3),
    email: z.email().trim(),
    comment: z.string().trim().min(10),
  })
  .transform((data) =>
    Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        typeof value === 'string' ? sanitize(value) : value,
      ]),
    ),
  );

export type CommentInput = z.infer<typeof commentSchema>;
