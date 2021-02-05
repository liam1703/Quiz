const express = require('express')
const bodyParser = require("body-parser")
const bcrypt = require('bcrypt-nodejs');

const app = express()
app.use(bodyParser.json())
let idCounter = 124;


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
            password: "lily123",
            score: 0
        }
    ]
}


app.get("/", (req , res)=>{
    res.send("this is working")
})


app.post("/signin", (req, res)=>{
    bcrypt.compare("bacon", hash, function(err, res) {
        // res == true
    });
    bcrypt.compare("veggies", hash, function(err, res) {
        // res = false
    });
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password){
        res.json("email and password match a current user!")
    } else {
        res.json("email and pass doesnt match a current user")
    }

})


app.post("/register", (req, res) =>{
    const {email, name, password} = req.body
    bcrypt.hash(password, null, null, function(err, hash) {
        // Store hash in your password DB.
    });
    idCounter += 1
    database.users.push({
        id : idCounter.toString(),
        name: "Dave",
        email: "dave@gmail.com",
        password: "dave123",
        score: 0
        

    })
    res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id', (req, res)=>{
    const { id } = req.params;
    let found = false;

    database.users.forEach(user => {
        if(user.id === id){
            found = true;
            return res.json(user);
        }



    })
    if(!found){
        res.status(400).json('not found');

    }
})








app.listen(3000, ()=>{
    console.log("Hello World!!")
})