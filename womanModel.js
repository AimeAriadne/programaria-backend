import mongoose from "mongoose"

const womanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  }
})

export default mongoose.model('diva', womanSchema)