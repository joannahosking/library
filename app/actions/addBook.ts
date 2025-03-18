"use server";

import { revalidatePath } from "next/cache";

export async function revalidateBookPage(bookId: string) {
  revalidatePath(`/book/${bookId}`);
}
