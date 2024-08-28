const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/loginpage")
.then(()=>{
    console.log("Database connected");
})
.catch(()=>{
    console.log("Not connected")
})

const loginSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    password:{
        type:String,
        required : true
    }
})

const collection = mongoose.model("logindetails",loginSchema);

module.exports = collection;