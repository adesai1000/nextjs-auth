import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL!);
        console.log("Connected to Database Successfuly.");
    }
    catch(error){
        if(error instanceof Error){
            console.error(`Error: ${error.message}`);
        }
        else{
            console.error("Unexpected error occured");
        }
        process.exit(1);
    }
}
export default connectDB;
