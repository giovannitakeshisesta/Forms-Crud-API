const mongoose = require('mongoose')

const EMAIL_PATTERN =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const form1Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Required - Back message'],
      trim: true,
      lowercase: true,
      match: [EMAIL_PATTERN, 'Pattern - Back message']
    }
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

const Form1 = mongoose.model('Form', form1Schema)

module.exports = Form1