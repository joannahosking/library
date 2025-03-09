/*
  Warnings:

  - You are about to drop the column `publishedAt` on the `UserBook` table. All the data in the column will be lost.
  - Added the required column `published` to the `UserBook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "publishedAt",
ADD COLUMN     "published" TEXT NOT NULL,
ALTER COLUMN "format" DROP NOT NULL;
