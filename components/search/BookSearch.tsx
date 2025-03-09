"use client";
import { useState, useEffect } from "react";
import { searchBooks } from "@/lib/booksapi";
import { BookInfo } from "@/types/book";
import BooksList from "./BooksList";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

const BookSearch = () => {
  const pathname = usePathname();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<BookInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [loadmore, setLoadmore] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const res = await searchBooks(query, offset);
    setResults((prev) => {
      setOffset(prev.length + res.items.length);
      return [...prev, ...res.items];
    });
    res.totalItems > results.length ? setLoadmore(true) : setLoadmore(false);
    setLoading(false);
  };

  useEffect(() => {
    setOffset(0);
    setResults([]);
    setLoadmore(false);
  }, [query]);

  useEffect(() => {
    setQuery("");
  }, [pathname]);

  return (
    <search role="search" className="search-wrapper">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="query"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
          defaultValue={query}
        />
        <button type="submit">
          <Search size={18} />
        </button>
      </form>
      <div className="search-results">
        {loading && <p>Loading...</p>}
        {results && <BooksList books={results} />}
        {loadmore && <button onClick={handleSearch}>Load more</button>}
      </div>
    </search>
  );
};

export default BookSearch;