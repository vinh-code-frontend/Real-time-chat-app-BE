import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connector = await mongoose.connect(process.env.DATABASE_URI);
    console.log(`MongoDB connected: ${connector.connection.host}`);
  } catch (error) {
    console.log("MongoDB connected failed");
    console.log(error);
  }
};
