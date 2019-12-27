const express = require('express');
const app = express();
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const userRouter = require('./routers/user')

const port = process.env.PORT || 3000

app.use(express.json())

//User endpoints
app.use(userRouter);

//using call backs

/* app.get('/users', (req, res) => {
    User.find({}).then((user) => {
        res.send(user);
    }).catch((error)=> {
        res.status(500).send();
    })
})

app.get('/users/:id', (req, res)=> {
    const _id = req.params.id;
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }

        res.send(user);

    }).catch((error)=> {
        res.status(500).send(error);
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

app.get('/tasks', (req, res)=> {
    Task.find({}).then((task)=> {
        res.send(task);
    }).catch((error)=> {
        res.status(500).send();
    })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;
    Task.findById(_id).then((task)=> {
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    }).catch((error)=> {
        res.status(500).send();
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

*/


//Using Async Await


// Task endpoints
app.get('/tasks', async(req, res)=> {
    try {
        const task = await Task.find({})
        res.send(task)
    } catch (error) {
        res.status(500).send();
    }
})

app.get('/tasks/:id', async(req, res)=> {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if(!task) {
            return res.status(404).send()
        }
        res.send(task);
    } catch (error) {
        res.status(500).send()
    }
})

app.post('/tasks', async(req, res)=> {
    const task = new Task(req.body)
    try {
        await task.save()
        res.send(task)
    } catch (error) {
        res.status(400).send();
    }
})

app.patch('/tasks/:id', async(req, res)=> {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']

    const isValidOperation = updates.every((update)=> {
        return allowedUpdates.includes(update)
    })

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(500).send()
    }
})

app.delete('/tasks/:id', async(req, res)=> {
    const _id = req.params.id
    try {
        const task = await Task.findByIdAndDelete(_id);
        if(!task) {
            return res.status(404).send();
        }
        return res.send(task)
    } catch (error) {
        res.status(500).send();
    }
})


app.listen(port, ()=> {
    console.log('Server is up on port ', port);
});