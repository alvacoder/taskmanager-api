const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email address is invalid');
            }
        }
    },
    
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number.')
            }
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('contains string \'password\'');
            }
        }
    }
})

//create new user
/* const me = new User({
    name: 'Prince',
    email: 'Prince@xttreme.com',
    password: 'viper'
});

me.save().then(() => {
    console.log(me);
}).catch((error) => {
    console.log(error);
}) */

//create task model
const Task = mongoose.model('Task', {
    description: {
        type: 'String',
        trim: true,
        required: true
    },

    completed: {
        type: 'Boolean',
        default: false
    }
})

//create new task
const task = new Task({
    description: 'Go to bed'
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})