const mongoose=require('mongoose') // importing mongo

// define the types and requried fuctions
var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true

    },
    cgpa:{
        type:String,
        required:true
    },
    gender:String
})

const userDB = mongoose.model('userDB',schema); // in userdb contains mongodb bulitin fuctions

module.exports=userDB; // export the data