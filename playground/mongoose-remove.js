const {ObjectID}=require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove()
//Todo.findOneAndRemove()

Todo.findByIdAndRemove('5b105dec43f146df31c8b312').then((todo)=>{
  if (todo===null) {
    return console.log('hihi');
  }
  console.log(todo);
})
