import React, { useState } from "react";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([
    { id: 1, title: "Mathematics for Grade 10", author: "R.D. Sharma", available: true },
    { id: 2, title: "Physics Fundamentals", author: "H.C. Verma", available: false },
    { id: 3, title: "Computer Science Basics", author: "John Doe", available: true },
    { id: 4, title: "English Grammar", author: "Wren & Martin", available: true },
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleAvailability = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, available: !book.available } : book
      )
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-700 mb-5">Library</h2>
      <input
        type="text"
        placeholder="Search books..."
        className="p-2 border border-gray-400 rounded-md mb-4 w-1/2"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <ul className="divide-y divide-gray-300">
          {books
            .filter((book) =>
              book.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((book) => (
              <li key={book.id} className="flex justify-between items-center p-4">
                <div>
                  <h3 className="text-xl font-semibold">{book.title}</h3>
                  <p className="text-gray-600">Author: {book.author}</p>
                </div>
                <button
                  onClick={() => toggleAvailability(book.id)}
                  className={`px-4 py-2 text-white rounded-md ${book.available ? "bg-green-500" : "bg-red-500"}`}
                >
                  {book.available ? "Borrow" : "Return"}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Library;
