import { UserBook } from "@prisma/client";

const OwnedBookDetails = ({ book }: { book: UserBook }) => {
  return (
    <>
      <h1>{book.title}</h1>
      <p className="author">{book.author}</p>
      <ul>
        {book.categories.map((cat: string, i: number) => (
          <li key={`category-${i}`}>{cat}</li>
        ))}
      </ul>
      <p className="description">{book.description}</p>
      <img src={book.thumbnail || "/placeholder.jpg"} alt={book.title} />

      <section className="user-actions">
        <button>Already in Library</button>
      </section>
    </>
  );
};

export default OwnedBookDetails;
