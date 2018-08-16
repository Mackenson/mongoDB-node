const mongoose = require('mongoose'),
Schema = mongoose.Schema,

let userSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  isOver21: {
    type: String,
    require: false
  }
})



module.exports = mongoose.models('user', userSchema);
