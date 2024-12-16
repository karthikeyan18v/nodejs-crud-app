const mongoose = require('mongoose')

//connecting nodejs to mongodb
const connectDB= async()=>{
    try{
        // connecting to mongoDb
        const con =await mongoose.connect(process.env.MONGO_URI,{
        })
        
        console.log(`MongoDB connected : ${con.connection.host}`);
    }
   
    catch(err){
        console.log(err);
        process.exit(1);

    }
}

module.exports=connectDB;