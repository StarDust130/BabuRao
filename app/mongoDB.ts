// Import mongoose to connect and interact with MongoDB
import mongoose from "mongoose";

// Get the MongoDB connection string from your .env.local file
const MONGODB_URI = process.env.MONGODB_URI as string;

// If the connection string is missing, throw an error
if (!MONGODB_URI) throw new Error("Please set MONGODB_URI in .env.local");

// Create a global variable to store the cached connection
// This avoids reconnecting to MongoDB every time the API route runs
let cached = (global as any)._mongoose;
if (!cached) {
  cached = (global as any)._mongoose = { conn: null, promise: null };
}

// Function to connect to MongoDB
export async function connectDB() {
  // If already connected, just return the existing connection
  if (cached.conn) {
    console.log("✅ MongoDB already connected! 🚀");
    return cached.conn;
  }

  // If not connected yet, start connecting and save the promise
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      console.log("🎉 MongoDB connected successfully! 🧠");
      return mongooseInstance;
    });
  }

  // Wait for the connection to finish
  cached.conn = await cached.promise;

  // Return the connection
  return cached.conn;
}
