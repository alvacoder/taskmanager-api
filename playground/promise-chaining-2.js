require('../src/db/mongoose')
const Task = require('../src/models/task')

/* Task.findByIdAndDelete('5e048a648bd4f11aa7437e44').then((task)=> {
    console.log(task)
    return Task.countDocuments({ completed: false
    }).then((result)=> {
        console.log(result)
    })
}).catch((error)=> {
    console.log(error)
}) */

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false});
    return count;
}

deleteTaskAndCount('5e04ad07dac9012120ff0eae').then((count)=> {
    console.log(count);
}).catch((error)=> {
    console.log(error);
})