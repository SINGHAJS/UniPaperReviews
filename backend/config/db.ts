import { MongoClient } from "mongodb";
const uri = "";
const client = new MongoClient(uri);

export const establishDatabaseConnection = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
};

export const getDatabaseClient = () => client;
