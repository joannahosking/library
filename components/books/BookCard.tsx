import { UserBook } from "@prisma/client";
import Link from "next/link";
import styles from "./book-card.module.css";

const BookCard = ({ book }: { book: UserBook }) => {
  return (
    <Link href={`/book/${book.id}`} className={styles.bookCard}>
      {book.thumbnail && <img src={book.thumbnail} alt={book.title} />}
      <strong>{book.title}</strong>
      <span>{book.author?.join(", ")}</span>
    </Link>
  );
};

export default BookCard;
