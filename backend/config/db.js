import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://d12mondal:D9mondal@cluster0.lxtabwx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0//bangaliana').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.