const mongoose = require('mongoose')

const radioSchema = new mongoose.Schema(
  {
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

const Radio = mongoose.model('Radio', radioSchema)

module.exports = Radio