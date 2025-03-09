/*
  Warnings:

  - Added the required column `pages` to the `UserBook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserBook" ADD COLUMN     "categories" TEXT[],
ADD COLUMN     "pages" INTEGER NOT NULL;
