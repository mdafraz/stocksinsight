import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

async function dbConnect() {
  await mongoose.connect(uri);
}
export default dbConnect;
