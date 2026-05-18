import Messages from '@/lib/models/Messages';
import connectDB from '@/lib/db';
import { NextResponse } from 'next/server';
import { messageSchema } from '@/lib/validators/messageSchema';
import { z } from 'zod';
import { ROLES_LIST } from '@/config/roles_list';
import { withAuth } from '@/lib/auth/withAuth';
import { limiter } from '@/config/limiter';

export const GET = withAuth(async function (_request) {
  await connectDB();

  try {
    const messages = await Messages.find().sort({ createdAt: -1 });
    return NextResponse.json({ messages }, { status: 200 });
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json(
      { message: 'Server error, try latter' },
      { status: 500 },
    );
  }
}, ROLES_LIST.Admin);

export const POST = async (request: Request) => {
  const remaining = await limiter.removeTokens(1);
  if (remaining < 0) {
    return NextResponse.json({ message: 'Too many request' }, { status: 429 });
  }

  const body = await request.json();

  const result = messageSchema.safeParse(body);

  if (!result.success) {
    const errors = z.flattenError(result.error);
    return NextResponse.json({ errors }, { status: 400 });
  }

  await connectDB();

  try {
    const newMessage = await Messages.create(result.data);
    return NextResponse.json(
      { message: 'New message was created', data: newMessage },
      { status: 201 },
    );
  } catch (err: unknown) {
    console.error(err);

    return NextResponse.json(
      { message: 'server error, try later' },
      { status: 500 },
    );
  }
};
