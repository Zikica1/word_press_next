import { z } from 'zod';
import { sanitize } from '../utils/sanitize';

export const messageSchema = z
  .object({
    name: z.string().trim().min(1),
    email: z.email().trim(),
    subject: z.string().trim().min(5),
    text: z.string().trim().min(10),
  })
  .transform((data) =>
    Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        typeof value === 'string' ? sanitize(value) : value,
      ]),
    ),
  );

export type MessageInput = z.infer<typeof messageSchema>;
