const mongoose = require('mongoose')

const EMAIL_PATTERN =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const MixedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Required - Back message'],
      trim: true,
      lowercase: true,
      unique: true,

    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Required - Back message'],
      trim: true,
      lowercase: true,
      match: [EMAIL_PATTERN, 'Pattern - Back message']
    },
    radioInput: {
      type: String,
      required: [true, 'Required - Back message'],
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

const MixedForm = mongoose.model('MixedForm', MixedSchema)

module.exports = MixedForm