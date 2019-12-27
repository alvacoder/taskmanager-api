require('../src/db/mongoose')
const User = require('../src/models/user')

/* User.findByIdAndUpdate('5e04387418d7c2176833af9c', { age: 24 })
.then((user)=> {
    if(!user) {
        return console.log('user id not found');
    }
    console.log(user);
    return User.countDocuments({
        age: 24
    }).then((result)=> {
        console.log(result);
    })
}).catch((error)=> {
    console.log(error);
}) */

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5e04387418d7c2176833af9c', 24).then((count)=> {
    console.log(count);
}).catch((error) => {
    console.log(error)
})