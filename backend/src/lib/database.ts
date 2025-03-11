import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://admin:xkmWLcgD7ur4Hnhv@backenddb.ty9ys.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB";

// Creating a client with a MongoClientOptions object to specify the API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const connectDB = async () => {
  try {
    // Client connection
    await client.connect();
    // Sending a ping request to check the connection
    await client.db("admin").command({ ping: 1 });
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export { client };
