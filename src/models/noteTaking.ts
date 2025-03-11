import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is required"],
        trim: true,
        maxLength: [300,"Title cannot be more than 300 characters"]
    },
    content: {
        type : String,
        required: true,
        trim: true,
        maxLength: [500,"Content cannot be more than 500 characters"]
    },
    createdAt: {
        type: Date,
        default : Date.now,
    }
})

const Note = mongoose.model("Note", NoteSchema)
export default Note;