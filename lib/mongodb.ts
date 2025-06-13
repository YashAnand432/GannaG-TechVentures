import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

if(!MONGODB_URL){
  throw new Error("Please define MONGODB_URL in the dot env file")
}

type ConnectionObject = {
  isConnected? : number 
}

const connection : ConnectionObject = {};

export default async function dbConnect() : Promise<void> {
  if(connection.isConnected){
    console.log("Already connected to db");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URL , {
      bufferCommands : false
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");

  } catch (error) {
      console.log("MongoDb connection error : " , error);
      throw new Error("Failed to connect to Mongodb");
  }
}



// import mongoose from 'mongoose';

// const MONGODB_URL = process.env.MONGODB_URL!;

// if (!MONGODB_URL) {
//   throw new Error('Please define MONGODB_URL in your environment variables');
// }

// export default async function dbConnect() {
//   return mongoose.connect(MONGODB_URL);
// }



// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI || '';

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cached = (global as any).mongoose;

// if (!cached) {
//   cached = (global as any).mongoose = { conn: null, promise: null };
// }

// async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }
//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connectToDatabase;
