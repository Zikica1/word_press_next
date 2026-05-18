'use server';

import Messages from '../models/Messages';

export const getAllMessagesFromDB = async () => {
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
