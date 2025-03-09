import BooksList from "@/components/books/BooksList";
import { auth } from '@/auth';

const Dashboard = async () => {
  const session = await auth();

  const limit = 5;

  const readingRes = await fetch(`http://localhost:3000/api/user/books?userEmail=${encodeURIComponent(session?.user?.email as string)}&status=READING&limit=${limit}`);
  const readingBooks = await readingRes.json();
  const wantToReadRes = await fetch(`http://localhost:3000/api/user/books?userEmail=${encodeURIComponent(session?.user?.email as string)}&status=WANT_TO_READ&limit=${limit}`);
  const wantToReadBooks = await wantToReadRes.json();
  const readRes = await fetch(`http://localhost:3000/api/user/books?userEmail=${encodeURIComponent(session?.user?.email as string)}&status=READ&limit=${limit}`);
  const readBooks = await readRes.json();

  return (
    <>
      <h1>Home</h1>
      <section>
        <h2>Currently Reading ({readingBooks.books.length})</h2>
        <BooksList books={readingBooks.books} />
      </section>
      <section>
        <h2>Want to Read ({wantToReadBooks.books.length})</h2>
        <BooksList books={wantToReadBooks.books} />
      </section>
      <section>
        <h2>Read ({readBooks.books.length})</h2>
        <BooksList books={readBooks.books} />
      </section>
    </>
  );
};

export default Dashboard;
