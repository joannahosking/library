import { UserBook } from "@prisma/client";
import UpdateFormat from "./ui/UpdateFormat";
import styles from "./book-details.module.css";

const OwnedBookDetails = ({ book }: { book: UserBook }) => {
  return (
    <div className={styles.bookDetails}>
      <figure className={styles.bookCover}>
        <img src={book.thumbnail?.replace("zoom=1", "zoom=0") || "/placeholder.jpg"} alt={book.title} />
      </figure>
      <section>
        <h1>{book.title}</h1>
        <p className={styles.bookAuthor}>{book.author}</p>
        <ul className={styles.bookTags}>
          {book.categories.map((cat: string, i: number) => (
            <li key={`category-${i}`}>{cat}</li>
          ))}
        </ul>
        <div
          className={styles.bookDescription}
          dangerouslySetInnerHTML={{ __html: book.description as string }}
        />
      </section>

      <section className={styles.userActions}>
        <UpdateFormat book={book} />
      </section>
    </div>
  );
};

export default OwnedBookDetails;
