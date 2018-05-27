// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb'); //object destructuring used it ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').insertOne({
    text:'Nothing to do',
    completed:true
  },(err,result)=>{
    if (err) {
      return console.log('Unable to insert todo');
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });


  db.close();
});
