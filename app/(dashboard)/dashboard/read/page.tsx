import BooksList from "@/components/books/BooksList";
import { auth } from "@/auth";

const ReadList = async () => {
  const session = await auth();

  const res = await fetch(
    `http://localhost:3000/api/user/books?userEmail=${encodeURIComponent(
      session?.user?.email as string
    )}&status=READ`
  );
  const data = await res.json();

  return (
    <>
      <h1>Read ({data.books.length})</h1>
      <BooksList books={data.books} />
    </>
  );
};

export default ReadList;
