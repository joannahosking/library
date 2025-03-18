import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import SearchedBookDetails from "@/components/books/SearchedBookDetails";
import { redirect } from "next/navigation";
import OwnedBookDetails from "@/components/books/ownedBookDetails";

const Book = async ({ params }: { params: { id: string } }) => {
  const session = await auth();
  const { id } = await params;

  if (!session?.user?.email) redirect("/404");

  const ownedBook = await prisma.userBook.findFirst({
    where: { googleId: id, userEmail: session.user.email },
  });

  if (ownedBook) {
    return <OwnedBookDetails book={ownedBook} />;
  }

  const res = await fetch(`http://localhost:3000/api/booksapi/${id}`);
  const googleBook = await res.json();

  if (!googleBook || googleBook.error) redirect("/404");

  return (
    <>
      <SearchedBookDetails book={googleBook} />
    </>
  );
};

export default Book;