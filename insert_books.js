const { MongoClient } = require('mongodb');

// Connection URL
const uri = "mongodb://localhost:27017"; // connect to your local MongoDB
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Select the database and collection
    const database = client.db('plp_bookstore');
    const books = database.collection('books');

    // Book data to insert
    const bookData = [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", published_year: 1925, price: 10.99, in_stock: true, pages: 218, publisher: "Scribner" },
      { title: "1984", author: "George Orwell", genre: "Dystopian", published_year: 1949, price: 12.99, in_stock: true, pages: 328, publisher: "Secker & Warburg" },
      { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", published_year: 1960, price: 9.99, in_stock: true, pages: 281, publisher: "J.B. Lippincott & Co." },
      { title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", published_year: 1988, price: 15.99, in_stock: true, pages: 212, publisher: "Bantam Books" },
      { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", published_year: 1937, price: 11.99, in_stock: true, pages: 310, publisher: "George Allen & Unwin" },
      { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", published_year: 1813, price: 8.99, in_stock: true, pages: 279, publisher: "T. Egerton" },
      { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", published_year: 1951, price: 10.49, in_stock: true, pages: 234, publisher: "Little, Brown and Company" },
      { title: "Sapiens", author: "Yuval Noah Harari", genre: "History", published_year: 2011, price: 18.99, in_stock: true, pages: 443, publisher: "Harper" },
      { title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure", published_year: 1988, price: 9.49, in_stock: true, pages: 197, publisher: "HarperTorch" },
      { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", published_year: 1997, price: 14.99, in_stock: true, pages: 309, publisher: "Bloomsbury" }
    ];

    // Insert the books
    const result = await books.insertMany(bookData);
    console.log(`${result.insertedCount} books inserted successfully!`);
  } finally {
    await client.close();
  }
}

// Run the function
run().catch(console.dir);
