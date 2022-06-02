const mongoose = require('mongoose')

const ImgInputSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, 'Required - Back message'],
    },
    name:{
      type:String,
      unique: true,
      required: [true, 'Required - Back message'],
    }
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v
        return ret
      }
    }
  }
)

const ImgInput = mongoose.model('ImgInput', ImgInputSchema)

module.exports = ImgInput