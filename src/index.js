const express = require('express');
const app = express();
require('./db/mongoose');
const User = require('./models/User');

const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res)=> {
    const user = req.body;

    User.save(user).then(()=> {
        res.send(user);
    }).catch((error) => {
        res.send(error);
    })
})


app.listen(port, ()=> {
    console.log('Server is up on port ', port);
});