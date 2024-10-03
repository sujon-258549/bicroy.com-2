import { MongoClient } from "mongodb"

const uri = "mongodb+srv://bicroy_com:8v7adtbTEo3ofPjF@cluster0.yx0jx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const mongoClient = new MongoClient(uri,{})
const dbClient = mongoClient.connect();

export default dbClient;