//import mongoose

const mongoose = require('mongoose')

//connect server to DB

mongoose.connect('mongodb://localhost:27017/bankApp',{useNewUrlParser:true})

//model creation

const User=mongoose.model('User',
{
    uname:String,
    acno:Number,
    password:String,
    balance:Number,
    transaction:[]
})

//exporting User

module.exports={
    User
}