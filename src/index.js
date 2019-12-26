const express = require('express');
const app = express();
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const port = process.env.PORT || 3000

app.use(express.json())

app.get('/users', (req, res) => {
    User.find({}).then((user) => {
        res.send(user);
    }).catch((error)=> {
        res.status(500).send();
    })
})

app.post('/users', (req, res)=> {
    const user = new User(req.body);

    user.save().then(()=> {
        res.status(201).send(user);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.save().then(() => {
        res.status(201).send(task);
    }).catch((error) => {
        res.status(400).send(error);
    })
})


app.listen(port, ()=> {
    console.log('Server is up on port ', port);
});