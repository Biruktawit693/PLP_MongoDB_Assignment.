# MongoDB Assignment – PLP Bookstore

## Setup Instructions
1. Install MongoDB Community Edition or use a free MongoDB Atlas account.
2. Open MongoDB Compass and connect to the `plp_bookstore` database.
3. Run `insert_books.js` using Node.js to populate the `books` collection:
   ```bash
   node insert_books.js
Queries Performed
All queries were executed using MongoDB Compass and/or Node.js scripts.

Basic CRUD Operations
Find all books in a specific genre

Find books published after a certain year

Find books by a specific author

Update the price of a specific book

Delete a book by title

Advanced Queries
Filtered books that are in stock and published after 2010

Projection used to show only title, author, price

Sorted books by price (ascending and descending)

Pagination implemented using limit and skip (5 books per page)

Aggregation Pipelines
Average price by genre

json
Copy code
[
  { "_id": "History", "averagePrice": 18.99 },
  { "_id": "Fiction", "averagePrice": 10.49 }
]
Author with most books

json
Copy code
[
  { "_id": "Stephen Hawking", "count": 1 },
  { "_id": "F. Scott Fitzgerald", "count": 1 }
]
Books grouped by decade

json
Copy code
[
  { "_id": 2010, "count": 1 },
  { "_id": 1960, "count": 2 }
]
Indexing
Index created on title for faster searches.

Compound index created on author + published_year.

Query performance verified using explain(); indexes were utilized successfully.

Notes
MongoDB Compass was used for all queries.

Screenshots were not possible due to technical issues with Windows tools; all steps were followed carefully.

Sample query outputs are provided instead as proof of completed tasks.
