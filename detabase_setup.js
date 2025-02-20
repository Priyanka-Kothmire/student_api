const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; 
const client = new MongoClient(uri);

async function setupDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("studentDB");

    // Create Students Collection
    await db.createCollection("students");
    console.log("Students collection created");

    // Create Marks Collection
    await db.createCollection("marks");
    console.log("Marks collection created");

    // Insert Sample Data
    const students = db.collection("students");
    await students.insertMany([
      { name: "John Doe", email: "john@example.com", age: 21 },
      { name: "Jane Smith", email: "jane@example.com", age: 22 },
    ]);

    console.log("Sample students inserted");

    await client.close();
  } catch (error) {
    console.error("Error setting up database:", error);
  }
}

setupDatabase();
