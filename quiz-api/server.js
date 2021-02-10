const express = require('express')
const bodyParser = require("body-parser")
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');




const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'liambradbury',
      password : '',
      database : 'quizzer'
    }
  });
// request returns a promise
db.select('*').from('users').then(data => {
    console.log(data);

});

const app = express()
app.use(bodyParser.json());
app.use(cors())
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
    res.send(database.users)
})


app.post("/signin", (req, res)=>{
    bcrypt.compare("bacon", hash, function(err, res) {
        // res == true
    });
    bcrypt.compare("veggies", hash, function(err, res) {
        // res = false
    });
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password){
        res.json(database.users[0]);
    } else {
        res.json("email and pass doesnt match a current user")
    }

})


app.post("/register", (req, res) =>{
    const {email, name, password} = req.body
    db.
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








app.listen(3001, ()=>{
    console.log("Hello World!!")
})