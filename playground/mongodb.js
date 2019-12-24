//CRUD with mongo

//const mongodb = require('mongodb');
//const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to Database.');
    }

     const db = client.db(databaseName, { useUnifiedTopology: true });

     //Create
/*      const id = new ObjectID;
     console.log(id);
     console.log(id.getTimestamp());

     db.collection('users').insertOne({
         _id: id,
         name: 'Vikram',
         age: 26
     }, (error, result) => {
         if(error) {
             return console.log(error);
         }
         console.log(result.ops);
     }) */

/*      db.collection('users').insertMany([
         {
             name: 'Jen',
             age: 26
         },
         {
             name: 'Gunter',
             age: 27
         }
     ], (error, result) => {
         if(error) {
             return console.log('Unable to insert document');
         }

         console.log(result.ops);
     }) */

/*      db.collection('tasks').insertMany([
         {
             description: 'Have a great night rest',
             completed: true
         },
         {
             description: 'Take some tutorials from Mead',
             completed: true
         },
         {
             description: 'Go shopping with Bluebird',
             completed: false
         }
     ], (error, result) => {
         if(error) {
             return console.log('Unable to create document');
         }

         console.log(result.ops);
     }) */

     //Read
/*      db.collection('users').findOne({
         name: 'Gunter'
     }, (error, user) => {
         if(error) {
             return console.log('Unable to find user.');
         }
         console.log(user);
     }) */

/*      db.collection('users').findOne({
         _id: ObjectID("5e018172ccf943e10482176d")
     }, (error, user) => {
         if(error) {
             return console.log(error);
         }
         console.log(user);
     }) */

/*      db.collection('tasks').find({
         completed: true
     }).toArray((error, tasks) => {
        if(error) {
            return console.log(error);
        }
        console.log(tasks);
     })

     db.collection('tasks').find({
        completed: true
    }).count((error, tasks) => {
       if(error) {
           return console.log(error);
       }
       console.log(tasks);
    }) */

    //Update
/*     const updatePromise = db.collection('users').updateOne({
        _id: new ObjectID("5e01533e97496fde60a69876")
    }, {
        $set: {
            name: 'Viper'
        }
    })

    updatePromise.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    }) */

/*     const incAge24 = db.collection('users').updateMany({
        age: 24
    }, {
        $inc: {
            age: 1
        }
    })

    incAge24.then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error);
    }) */

    //Delete
/*     const deleteUser = db.collection('users').deleteOne({
        _id: new ObjectID("5e0181feda201fe11ed477d0")
    })

    deleteUser.then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    }) */

    const deleteUser = db.collection('users').deleteMany({
        age: 27
    })

    deleteUser.then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })

})