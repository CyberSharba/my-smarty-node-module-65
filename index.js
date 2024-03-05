
const express = require('express');
const cors = require('cors');
const app = express()
const port =process.env.port || 5000
app.use(cors())
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('hellow sharbasis you  are bekar you are a poor person !!!!!!!! hellow')
})

const users = [
    {id:1,name: 'sam',email:'sam@gmail.com',phone: '01788885643'},
    {id:2,name: 'ram',email:'ram@gmail.com',phone: '01788885643'},
    {id:3,name: 'jodu',email:'jodu@gmail.com',phone: '01788885643'},
    {id:4,name: 'modhu',email:'modhu@gmail.com',phone: '01788885643'},
    {id:5,name: 'sharba',email:'sharba@gmail.com',phone: '01788885643'},
    {id:6,name: 'pilu',email:'pilu@gmail.com',phone: '01788885643'},
    {id:7,name: 'roky',email:'roky@gmail.com',phone: '01788885643'},
    {id:8,name: 'lal',email:'lal@gmail.com',phone: '01788885643'},
]

app.get('/users',(req,res)=>{
    // console.log('query',req.query)
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const match = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(match)
    }
    res.send(users);
})

app.get('/user/:id',(req,res) => {
    // console.log(req.params)
    const id = req.params.id
    // const user = users[id]
    const user = users.find(u => u.id == id)
    res.send(user)
})
app.get('/fruits',(req,res)=>{
    res.send(['mango','apple','orange' ]);
});
  // ///update data////
app.post('/user',(req,res) =>{
    console.log('request',req.body);
    const user = req.body
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port,() =>{
    console.log('lisetening to port',port)
})
