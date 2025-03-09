import { BookInfo } from "@/types/book";
import BookCard from "./BookCard";

const BooksList = ({books}: {books: BookInfo[]}) => {
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