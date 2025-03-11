import mongoose from "mongoose";

const connectToDb = async () => {
    try{
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined");
        }
        await mongoose.connect(mongoUri);
        console.log("Database connected")
    } catch(error){
        console.error(`MongoDb connection failed`, error)
        process.exit
    }
}  

export default connectToDb;