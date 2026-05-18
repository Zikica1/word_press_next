import mongoose from 'mongoose';
import sanitizeHtml from 'sanitize-html';

const Schema = mongoose.Schema;

const messagesSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minLength: [5, 'Name must be at least 5 characters'],
      maxLength: [50, 'Name too long'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      minLength: [5, 'Subject must be at least 5 characters'],
      maxLength: [100, 'Subject to long'],
    },
    text: {
      type: String,
      required: [true, 'Message text is required'],
      trim: true,
      minLength: [10, 'Message must be at least 10 characters'],
      maxLength: [1000, 'Message too long'],
      set: (v: string) =>
        sanitizeHtml(v, { allowedTags: [], allowedAttributes: {} }),
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Message ||
  mongoose.model('Message', messagesSchema);
