const mongoose = require('mongoose')

const EMAIL_PATTERN =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


const MixedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: [true, 'Required - Back message'],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      match: [EMAIL_PATTERN, 'Pattern - Back message'],
      required: [true, 'Required - Back message'],
    },
    age:{
      type:Number,
      required: [true, 'Required - Back message'],
      min: [6, 'the min is 6 - Back message']
    },
    radioInput: {
      type: String,
      required: [true, 'Required - Back message'],
    },
    description:{
      type:String,
      required: [true, 'Required - Back message'],
      minlength: [3, 'minlength 3 characters - Back message']
    },
    checkBoxList:[]
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        // delete ret.password
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v
        return ret
      }
    }
  }
)

const MixedForm = mongoose.model('MixedForm', MixedSchema)

module.exports = MixedForm