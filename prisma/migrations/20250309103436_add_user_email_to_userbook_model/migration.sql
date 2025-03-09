/*
  Warnings:

  - Added the required column `userEmail` to the `UserBook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserBook" ADD COLUMN     "userEmail" TEXT NOT NULL;
