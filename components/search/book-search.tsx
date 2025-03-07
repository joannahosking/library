"use client";
import { useState, useEffect } from "react";
import { searchBooks } from "@/lib/googleBooks";
import { GoogleBook } from "@/types/book";
import BooksList from "../books/books-list";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GoogleBook[]>([]);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [loadmore, setLoadmore] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    console.log("startindex: " + startIndex);
    const res = await searchBooks(query, startIndex);
    setResults((prev) => {
      setStartIndex(prev.length + res.items.length);
      return [...prev, ...res.items];
    });
    res.totalItems > results.length ? setLoadmore(true) : setLoadmore(false);
    setLoading(false);
  };

  useEffect(() => {
    console.log("updating start index");
  }, [startIndex]);

  useEffect(() => {
    setStartIndex(0);
    setResults([]);
    setLoadmore(false);
  }, [query]);

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="query"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
          defaultValue={query}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {results && <BooksList books={results} />}
      {loadmore && <button onClick={handleSearch}>Load more</button>}
    </>
  );
};

export default BookSearch;
