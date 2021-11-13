const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/todoApp',{useNewUrlParser:true})

const User= mongoose.model('User',
{
    username:String,
    password:String,
    todos:[{
        id:String,
        todo:String,
        date:String
    }]

})

module.exports={
    User
}