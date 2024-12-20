"use server"
import connectDB from "@/lib/db";
import { User } from "@/models/Users";
import { redirect } from "next/navigation";

const register = async (formData: FormData) =>{
    const firstName = formData.get('firstname') as string;
    const lastName = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if(!firstName||lastName||email||password){
        throw new Error("Please Enter all the values and try again.")
    }
    await connectDB()

    //Check for existing Users
    const existingUser = await User.findOne({email});
    if(existingUser) throw new Error("User Already Exists");

    //Creating User
    await User.create({firstName, lastName, email, password});
    console.log("User Created.")
    redirect('/login');
};

export {register};