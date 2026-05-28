'use server';

import Messages from '../models/Messages';
import connectDB from '../db';

export const getAllMessagesFromDB = async () => {
  await connectDB();

  try {
    const messages = await Messages.find().lean();
    return messages.map((msg) => ({
      ...msg,
      _id: msg._id.toString(),
      createdAt: msg.createdAt?.toISOString(),
    }));
  } catch (error) {
    console.error('DB error:', error);
    return [];
  }
};
