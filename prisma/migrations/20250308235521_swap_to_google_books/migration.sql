/*
  Warnings:

  - You are about to drop the column `olid` on the `UserBook` table. All the data in the column will be lost.
  - Added the required column `googleId` to the `UserBook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "olid",
ADD COLUMN     "googleId" TEXT NOT NULL;
