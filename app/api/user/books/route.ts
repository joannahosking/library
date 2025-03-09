export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Status } from "@prisma/client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userEmail = searchParams.get("userEmail");
  const status = searchParams.get("status");
  const limit = searchParams.get("limit");
  const limitValue = limit ? parseInt(limit) : undefined;

  if (!userEmail)
    return NextResponse.json({ message: "Missing email" }, { status: 400 });

  const allowedStatuses: Status[] = ["WANT_TO_READ", "READ", "READING"];
  const prismaStatus = allowedStatuses.includes(status as Status)
    ? (status as Status)
    : undefined;

  try {
    const userBooks = await prisma.userBook.findMany({
      where: {
        userEmail,
        ...(prismaStatus ? { status: prismaStatus } : {}),
      },
      take: limitValue,
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
