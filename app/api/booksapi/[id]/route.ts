import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch book data");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}