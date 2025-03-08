import { notFound } from "next/navigation";

const Book = async ({ params }: { params: { id: string } }) => {
  const {id} = await params;
  const res = await fetch(`http://localhost:3000/api/booksapi/${id}`);
  const book = await res.json();

  if (!book || book.error) notFound();

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
      <p className="description">{book.volumeInfo.description}</p>
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
    </>
  );
};

export default Book;
