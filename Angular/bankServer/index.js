//import express
const express=require('express')

//import session
const session=require('express-session')

//create app
const app=express()

// to parse json
app.use(express.json())

//import dataservice
const dataService=require('./services/data.service')

//import JWT
const jwt=require('jsonwebtoken')

//importing cors
const cors=require('cors')

//allowing resource sharing using cors
app.use(cors({
    origin:'http://localhost:4200',
    Credentials:true
}))

//to generate session
app.use(session({
    secret:'randomsecretkey',
    resave:false,
    saveUninitialized:false
}))

// middle ware creation- application specific
app.use((req,res,next)=>{
    // console.log("middle ware");
    next()
})

//middleware-Router Specific
const authMiddleWare =(req,res,next)=>{
    if(!req.session.currentAcno){
        const result=( {
          statusCode: 401,
          status: false,
          message: "please login",
        })
        res.status(result.statusCode).json(result.message)
    }
        else{
            if(req.session.currentAcno!=req.body.acno){
                const result=({
                    statusCode: 401,
                    status: false,
                    message: "not current user",

                })
                res.status(result.statusCode).json(result.message)
            }
            else{
                next()

            }
            
        }
}

//jwt middleware

const jwtMiddleWare=(req,res,next)=>{
    try{
        const token=req.headers['access-token']
        const data=jwt.verify(token,'spersecretkey123123')
        req.currentAcno=data.currentAcno
        next()
    }
    catch{
        const result=({
            statusCode: 401,
            status: false,
            message: "please login",

        })
        res.status(result.statusCode).json(result.message)

    }
}

//jwt test api
app.post('/token',jwtMiddleWare,(req,res,)=>{
    res.send("current acno:"+req.currentAcno)
})


//resolving http method
app.get('/',(req,res)=>{
    res.send("GET")
})

// app.post('/',(req,res)=>{
//     console.log("post");
//     res.send("post")
// })

// app.put('/',(req,res)=>{
//     res.send("put")
// })

// app.patch('/',(req,res)=>{
//     res.send("patch")
// })

// app.delete('/',(req,res)=>{
//     res.send("delete")
// })


//bank register api

app.post('/register',(req,res)=>{

    // console.log((req.body));

    (dataService.register(req.body.uname,req.body.acno,req.body.password,req.body.balance))
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
    
    
})

//bank login api
app.post('/login',(req,res)=>{
    // console.log((req.body));

    dataService.login(req.body.acno,req.body.password)
    .then(result =>{
        res.status(result.statusCode).json(result)

    })
    
    

})

//deposit API
app.post('/deposit',jwtMiddleWare,(req,res)=>{
    // console.log((req.body));

    (dataService.deposit(req.body.acno,req.body.password,req.body.amount))
    .then(result=>{
        res.status(result.statusCode).json(result)

    })
    
    

})

//withdraw API
app.post('/withdraw',jwtMiddleWare,(req,res)=>{
    // console.log((req.body));

    (dataService.withdraw(req,req.body.acno,req.body.password,req.body.amount))
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
    
    

})

//transaction api

app.post('/transaction',jwtMiddleWare,(req,res)=>{
    

    dataService.getTransaction(req.body.acno).then(result=>{

        res.status(result.statusCode).json(result)
    })
    
    

})

//delete API

app.delete('/deleteAcc/:acno',jwtMiddleWare,(req,res)=>{
    dataService.deleteAcc(req.params.acno).then(result=>{
        res.status(result.statusCode).json(result)
    })
})



app.listen((3000),()=>{
    console.log("server starts at port number:3000");
})