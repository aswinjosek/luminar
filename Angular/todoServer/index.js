const express=require('express');

const dataService= require('./services/data.service')

const app= express()

const cors= require('cors')

app.use(cors({
    origin:'http://localhost:4200',
    Credentials:true
}))

app.use(express.json())



app.post('/register',(req,res)=>{
    dataService.register(req.body.username,req.body.password)
   .then(result=>{
       res.status(result.statusCode).json(result)
   })

})

app.post('/login',(req,res)=>{
    dataService.login(req.body.username,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/addTodo',(req,res)=>{
    // console.log(req.body.date);
    dataService.addTodo(req.body.username,req.body.todo,req.body.date)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/getTodos',(req,res)=>{
    dataService.getTodos(req.body.objId)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

})

app.post('/todoDelete',(req,res)=>{

    // console.log(req.body.id);
    dataService.todoDelete(req.body.objId,req.body.todoId)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

})

app.post('/todoUpdate',(req,res)=>{

    // console.log(req.body.id);
    dataService.todoUpdate(req.body.objId,req.body.todoId,req.body.updatedTodo,req.body.updatedDate)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

})

app.post('/todoFind',(req,res)=>{

    // console.log(req.body.id);
    dataService.todoFind(req.body.objId,req.body.myDate)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

})

app.listen((3000),()=>{
    console.log("server starts @ 3000");
})




