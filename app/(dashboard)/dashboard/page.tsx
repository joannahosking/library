import BooksList from "@/components/books/BooksList";

const Dashboard = async () => {
  const res = await fetch(`http://localhost:3000/api/user/books`);
  const books = await res.json();
  console.log(books);

  return (
    <>
      <h1>Home</h1>
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
};

export default Dashboard;
