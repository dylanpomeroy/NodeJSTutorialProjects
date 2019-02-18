const {ObjectID} = require('mongodb')

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5c6af4da83bd6843d86c342c'}).then((todo) => {

});

Todo.findByIdAndRemove('5c6af4da83bd6843d86c342c').then((todo) => {
    console.log(todo);
});