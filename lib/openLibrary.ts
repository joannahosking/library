export async function searchBooks(query: string, offset: number = 0) {
  if (!query) return { totalItems: 0 };

  const searchParams = new URLSearchParams({
    q: encodeURIComponent(query),
    limit: "10",
    offset: offset.toString(),
  } as Record<string, string>);

  const res = await fetch(
    `https://openlibrary.org/search.json?${searchParams}`
  );

  const data = await res.json();

  return data;
}