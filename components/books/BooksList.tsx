import { UserBook } from "@prisma/client";
import BookCard from "./BookCard";

const BooksList = ({books}: {books: UserBook[]}) => {
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