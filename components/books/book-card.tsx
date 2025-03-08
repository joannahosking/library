import { BookInfo } from "@/types/book";
import Link from "next/link";

const BookCard = ({ book }: { book: BookInfo }) => {
  return (
    <Link href={`/book/${book.id}`}>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
      />
      <strong>{book.volumeInfo.title}</strong>
      <span>{book.volumeInfo.authors?.join(", ")}</span>
    </Link>
  );
};

export default BookCard;
