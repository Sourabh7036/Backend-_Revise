import mongoose from "mongoose";

async function ConnectDb() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database is Connected");
}

export default ConnectDb;
