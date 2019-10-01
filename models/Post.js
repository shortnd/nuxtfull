const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', UserSchema)
module.exports = User
