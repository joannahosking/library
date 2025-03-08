export async function searchBooks(query: string, startIndex: number = 0) {
  if (!query) return { totalItems: 0 };

  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=10&startIndex=${startIndex}`
  );

  const data = await res.json();

  return data;
}