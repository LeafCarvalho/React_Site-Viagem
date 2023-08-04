//Libs
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDBUrl = process.env.MONGO_DB_URL;

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

export default db;
