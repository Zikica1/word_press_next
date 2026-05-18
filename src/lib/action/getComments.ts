'use server';

import Comments from '@/lib/models/Comments';
import connectDB from '../db';

const getComments = async (slug: string) => {
  await connectDB();

  try {
    const comments = await Comments.find({ idPost: slug })
      .sort({ createdAt: -1 })
      .lean();

    if (!comments) {
      return null;
    }

    return comments;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getComments;
