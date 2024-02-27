import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const MongoDB_URI =process.env.MONGODB_URI!

async function connectToDatabase() {
  try {
    await mongoose.connect(MongoDB_URI)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}

export default connectToDatabase
