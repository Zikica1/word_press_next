import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentsSchema = new Schema(
  {
    idPost: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      minLength: [3, 'Name must bi at least 3 characters'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'],
      trim: true,
      minLength: [10, 'Comment must be at lease 10 characters'],
      maxLength: [500, 'Comment too long'],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Comments ||
  mongoose.model('Comments', commentsSchema);
