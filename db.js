import mongoose from "mongoose"
import * as dotenv from 'dotenv'

dotenv.config()

async function connectDataBase() {
  try {
    console.log('Data base connection initialized')

    await mongoose.connect(process.env.MONGO_URL)

    console.log('Data base connected')
  } catch (error) {
    console.log(error)
  }
}

export default connectDataBase