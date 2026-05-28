import Messages from '../models/Messages';
import connectDB from '../db';

export const getMessageFromDB = async (id: string) => {
  await connectDB();

  try {
    const message = await Messages.findById(id).lean();

    if (!message) {
      return null;
    }

    return {
      ...message,
      _id: message._id.toString(),
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};
