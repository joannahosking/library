"use client";

import { UserBook } from "@prisma/client";
import { updateBookFormat } from "@/app/actions/editBooks";
import { useState } from "react";

const UpdateFormat = ({ book }: { book: UserBook }) => {
  const [format, setFormat] = useState(book.format);

  const handleChange = async (selected: string) => {
    const updatedFormat = format === selected ? null : selected;
    setFormat(updatedFormat);

    const formData = new FormData();
    formData.append("id", book.id);
    formData.append("format", updatedFormat || "");

    try {
      await updateBookFormat(formData);
    } catch (error) {
      console.error("Format update failed:", error);
    }
  };

  return (
    <>
      <form>
        <label>
          <input
            type="checkbox"
            name="format"
            value="AUDIOBOOK"
            checked={format === "AUDIOBOOK"}
            onChange={() => handleChange("AUDIOBOOK")}
          />
          Audiobook
        </label>

        <label>
          <input
            type="checkbox"
            name="format"
            value="EBOOK"
            checked={format === "EBOOK"}
            onChange={() => handleChange("EBOOK")}
          />
          eBook
        </label>
      </form>
    </>
  );
};

export default UpdateFormat;
