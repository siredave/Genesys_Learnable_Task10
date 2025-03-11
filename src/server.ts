import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectToDb from "./database/db"
import noteRoutes from "./routes/noteRoutes"
import errorHandler from "./middleware/errorHandler"


dotenv.config();

connectToDb()
const app = express();
const PORT = process.env.PORT


//Routes
app.use("/api/notes", noteRoutes)

//Middleware
app.use(cors())
app.use(express.json())
app.use(errorHandler)

app.use("/", (req: express.Request, res: express.Response) => {
    res.send("Welcome to the note taking api");
});

app.use("/test", (req: express.Request, res: express.Response) => {
    res.send("This is a test page");
});

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})