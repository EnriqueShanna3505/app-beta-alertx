import mongoose from 'mongoose';
import { ENV } from './env.js';

const connectToMongoDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log('Connected to MongoDB:', conn.connection.host);
  } catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};
export default connectToMongoDB;
