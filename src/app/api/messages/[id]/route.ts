import Messages from '@/lib/models/Messages';
import connectDB from '@/lib/db';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { requireApiRoles } from '@/lib/server-auth/requireApiRoles';

type IdContext = {
  params: Promise<{ id: string }>;
};

export const GET = async (request: Request, { params }: IdContext) => {
  await connectDB();

  const { id } = await params;

  // const url = new URL(request.url);
  // const id = url.pathname.split('/').pop();

  //typescript-id je string ili undefined, zato proveravam da li postoji !id
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
  }

  try {
    const message = await Messages.findById(id);

    if (!message) {
      return NextResponse.json(
        {
          message: `Message id ${id} not found`,
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        data: message,
      },
      { status: 200 },
    );
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json(
      { message: 'Server error, try later' },
      { status: 500 },
    );
  }
};

export const DELETE = async (request: Request, { params }: IdContext) => {
  try {
    await requireApiRoles(500);
  } catch {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  }

  await connectDB();

  const { id } = await params;

  // const url = new URL(request.url);
  // const id = url.pathname.split('/').pop();

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
  }

  try {
    const messageDel = await Messages.findByIdAndDelete(id); //findOneAndDelete({_id:params.id})
    if (!messageDel) {
      return NextResponse.json(
        { message: `Message id ${id} not found` },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: 'Message deleted successfully' },
      { status: 200 },
    );
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json(
      { message: 'Server error,try letter' },
      { status: 500 },
    );
  }
};
