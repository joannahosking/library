"use client";

import { useState } from "react";
import { BookInfo } from "@/types/book";

const AddBook = ({ book }: { book: BookInfo }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddBook = async () => {
    setIsAdding(true);
    setError(null);

    try {
      const res = await fetch(`/api/booksapi/${book.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors,
          published: book.volumeInfo.publishedDate,
          thumbnail: book.volumeInfo.imageLinks.thumbnail,
          description: book.volumeInfo.description,
          categories: book.volumeInfo.categories,
          pages: book.volumeInfo.pageCount,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Book added successfully");
      } else if (res.status === 409) {
        setError("You already have this book in your library");
      } else {
        setError(data.error || "Failed to add book");
      }
    } catch (error) {
      setError("An error occurred while adding the book");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <>
      <button onClick={handleAddBook} disabled={isAdding}>
        {isAdding ? "Adding..." : "Add to library"}
      </button>
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default AddBook;
