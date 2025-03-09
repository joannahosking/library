/*
  Warnings:

  - The `author` column on the `UserBook` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "author",
ADD COLUMN     "author" TEXT[];
