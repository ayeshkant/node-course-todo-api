const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id='5b0e4a9a48c858803aace9c0';

Todo.find({
  _id:id
}).then((todos)=>{
  console.log('Todos',todos);
})

Todo.findOne({
  _id:id
}).then((todo)=>{
  console.log('Todo',todo);
})
