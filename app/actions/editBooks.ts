"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function updateBookFormat(formData: FormData) {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const id = formData.get("id") as string;
  const format = formData.get("format") as string;

  if (!id) return;

  const book = await prisma.userBook.findUnique({
    where: { id: id },
    select: { userEmail: true },
  });

  if (!book || book.userEmail !== session.user.email) {
    throw new Error("Unauthorized");
  }

  await prisma.userBook.update({
    where: { id: id },
    data: { format: format },
  });
}
