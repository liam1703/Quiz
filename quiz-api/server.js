const express = require('express')
const bodyParser = require("body-parser")

app.use(bodyParser.json())
const app = express()

 
const database = {
    users:[
        {
            id: "123",
            name: "liam",
            email: "liam@gmail.com",
            password: "dog123",
            score: 0
        },{
            id:"124",
            name: "lily",
            email:"lily@gmail.com",
            password: "toby123",
            score: 0
        }
    ]
}


app.get("/", (req , res)=>{
    res.send("this is working")
})


app.post("/signin", (req, res)=>{
    if(req.body.email === database.users[0].email){
        res.json("email match!")
    } else {
        res.send("email doesnt match")
    }
    if(req.body.password === database.users[0].password){
        res.json("pass match")
    } else {
        res.send("password doesent match!")
    }
    res.send("signin")
})


app.listen(3000, ()=>{
    console.log("Hello World!!")
})