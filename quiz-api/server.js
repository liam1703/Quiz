const express = require('express')
const bodyParser = require("body-parser")
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const { response } = require('express');




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
// db.select('*').from('users').then(data => {
//     console.log(data);

// });

const app = express()
app.use(bodyParser.json());
app.use(cors())
// let idCounter = 124;





app.get("/", (req , res)=>{
    res.send('success')
})

app.post('/signin', (req, res) => {
    db.select('email', 'hash').from('login')
      .where('email', '=', req.body.email)
      .then(data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
        if (isValid) {
          return db.select('*').from('users')
            .where('email', '=', req.body.email)
            .then(user => {
              res.json(user[0])
            })
            .catch(err => res.status(400).json('unable to get user'))
        } else {
          res.status(400).json('wrong credentials')
        }
      })
      .catch(err => res.status(400).json('wrong credentials'))
  })


//transactions with dbs stop us from having inconsistencies within out db
app.post("/register", (req, res) =>{
    const {email, name, password} = req.body
    const hash = bcrypt.hashSync(password);
        db.transaction(trx => {
            trx.insert({
                hash: hash,
                email: email
            })
            .into('login')
            .returning('email')
            .then(loginEmail => {
                return trx('users')
                    .returning('*')
                    .insert({
                        email: loginEmail[0],
                        name: name,
        

                    }).then(user => {
                        res.json(user[0]);
                    })

                })
                .then(trx.commit)
                .catch(trx.rollback)
            })
        
    .catch(err => res.status(400).json('unable to register, email may already be in use'))
    
})



app.put('/score', (req, res) => {
    const { id, score } = req.body;
    db('users').where('id', '=', id)
    .update({
        score: score,
        
      })
    .returning('score')
    .then(score => {
      res.json(score[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'))
  })



app.get('/profile/:id', (req, res)=>{
    const { id } = req.params;
    
    db.select('*').from('users').where({
        id: id
    }).then(user => {
        found = true;
        if(user.length){
            res.json(user[0]);
        } else {
            res.status(400).json('Not found');
        }
        
    })
    .catch(err => res.status(400).json('Sorry there was an error getting the user'));


})








app.listen(3001, ()=>{
    console.log("Hello World!!")
})