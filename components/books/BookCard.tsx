import { UserBook } from "@prisma/client";
import Link from "next/link";
import styles from "./book-card.module.css";
import {Headphones, FileText} from 'lucide-react';

const BookCard = ({ book }: { book: UserBook }) => {
  return (
    <Link href={`/book/${book.googleId}`} className={styles.bookCard}>
      {book.thumbnail && (
        <figure className={styles.bookCover}>
          <img src={book.thumbnail} alt={book.title} />
          {book.format === 'AUDIOBOOK' && <span className={styles.bookFormat}><Headphones size={14} /></span>}
          {book.format === 'EBOOK' && <span className={styles.bookFormat}><FileText size={14} /></span>}
        </figure>
      )}
      <strong>{book.title}</strong>
      <span>{book.author?.join(", ")}</span>
    </Link>
  );
};

export default BookCard;
