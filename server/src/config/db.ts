import mongoose from "mongoose"

const connectDB = async (): Promise<void> => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI!);

        console.log(`MongoDB Connected`);
        console.log(`Database: ${conn.connection.name}`);
        
    }catch(error){
        console.error("MongoDB Connection Failed")

        if(error instanceof Error){
            console.error(error.message)
        }
        process.exit(1)
    }
}

export  default connectDB;