import { GoogleBook } from "@/types/book";
import BookCard from "./book-card";

const BooksList = ({books}: {books: GoogleBook[]}) => {
  return (
    <ul>
      {books.map((book, i) => (
        <li key={`${book.id}-${i}`}>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;