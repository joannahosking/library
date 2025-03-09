export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function GET({ params }: { params: { type: string } }) {
  const session = await auth();
  console.log(session);

  if (!session?.user?.email) {
    return NextResponse.json({
      error: "You must be logged in to view your library.",
    });
  }

  const { type } = await params;

  try {
    const userBooks = await prisma.userBook.findMany({
      where: { userEmail: session.user.email },
    });

    return NextResponse.json({
      message: "Books found successfully.",
      books: userBooks,
    });
  } catch (error) {
    console.error("Error fetching books: ", error);
    return NextResponse.json(
      { error: "Error fetching books" },
      { status: 500 }
    );
  }
}
