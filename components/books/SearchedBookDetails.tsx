import { BookInfo } from "@/types/book";
import AddBook from "./ui/AddBook";

const SearchedBookDetails = ({ book }: { book: BookInfo }) => {
  console.log(book);
  return (
    <>
      <h1>{book.volumeInfo.title}</h1>
      <p className="author">{book.volumeInfo.authors.join(", ")}</p>
      <ul>
        {book.volumeInfo.categories.map((cat: string, i: number) => (
          <li key={`category-${i}`}>{cat}</li>
        ))}
      </ul>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
      />

      <img
        src={book.volumeInfo.imageLinks.thumbnail.replace("zoom=1", "zoom=0")}
        alt={book.volumeInfo.title}
      />

      <section className="user-actions">
        <AddBook book={book} />
      </section>
    </>
  );
};

export default SearchedBookDetails;
