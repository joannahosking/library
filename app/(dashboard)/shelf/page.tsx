// import BooksList from '@/components/books/books-list';
import BookSearch from "@/components/search/book-search";

export default function Shelf() {
  return (
    <>
      <h1>Shelf</h1>
      <BookSearch />
      <section>
        <h2>Currently Reading (#)</h2>
      </section>
      <section>
        <h2>Want to Read (#)</h2>
      </section>
      <section>
        <h2>Read (#)</h2>
      </section>
    </>
  );
}