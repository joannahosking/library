export async function searchBooks(query: string, startIndex: number = 0) {
  if (!query) return { totalItems: 0 };

  const searchParams = new URLSearchParams({
    q: encodeURIComponent(query),
    maxResults: "10",
    startIndex: startIndex.toString(),
  } as Record<string, string>);

  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?${searchParams}`
  );

  const data = await res.json();

  return data;
}