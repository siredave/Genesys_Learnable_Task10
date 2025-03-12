import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxLength: [300, "Title cannot be more than 300 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
      maxLength: [500, "Content cannot be more than 500 characters"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt
  }
);

const Note = mongoose.model("Note", NoteSchema);
export default Note;
