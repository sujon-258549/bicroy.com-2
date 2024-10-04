// import { MongoClient } from "mongodb"

// const uri = "mongodb+srv://bicroy_com:8v7adtbTEo3ofPjF@cluster0.yx0jx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// const mongoClient = new MongoClient(uri,{})
// const dbClient = mongoClient.connect();

// export default dbClient;



import { MongoClient } from "mongodb";

// Directly using the MongoDB connection URI
const uri = "mongodb+srv://bicroy_com:8v7adtbTEo3ofPjF@cluster0.yx0jx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let client;
let clientPromise;

// Check if the environment is development or production
if (typeof window === 'undefined') {
    // In a server environment, use a singleton pattern
    if (!client) {
        client = new MongoClient(uri, {});
        clientPromise = client.connect();
    }
}

export default clientPromise;
