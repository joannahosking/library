export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
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

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const {
    title,
    author,
    published,
    thumbnail,
    description,
    categories,
    pages,
  } = await req.json();

  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "You must be logged in to add a book." });
  }

  const { id } = await params;

  try {
    const newBook = await prisma.userBook.create({
      data: {
        googleId: id,
        userEmail: session.user.email,
        title,
        author,
        published,
        thumbnail,
        description,
        categories,
        pages,
        status: "WANT_TO_READ",
      },
    });

    return NextResponse.json({
      message: "Book added successfully.",
      book: newBook,
    });
  } catch (error) {
    console.error("Error adding book: ", error);
    return NextResponse.json({ error: "Failed to add book" }, { status: 500 });
  }
}
