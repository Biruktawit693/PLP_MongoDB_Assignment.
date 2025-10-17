// Add this to tell Node.js to use CommonJS
import('module').then(() => {});

const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; // your MongoDB connection
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('plp_bookstore');
    const books = database.collection('books');

    // Query 1: Find all books in the "Fiction" genre
    const fictionBooks = await books.find({ genre: "Fiction" }).toArray();
    console.log("Fiction Books:");
    console.log(fictionBooks);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
// Query 2: Find books published after 2000
const recentBooks = await books.find({ published_year: { $gt: 2000 } }).toArray();
console.log("Books published after 2000:");
console.log(recentBooks);
