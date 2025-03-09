/*
  Warnings:

  - You are about to drop the column `userId` on the `UserBook` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[googleId,userEmail]` on the table `UserBook` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserBook" DROP CONSTRAINT "UserBook_userId_fkey";

-- DropIndex
DROP INDEX "UserBook_googleId_userId_key";

-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "UserBook_googleId_userEmail_key" ON "UserBook"("googleId", "userEmail");

-- AddForeignKey
ALTER TABLE "UserBook" ADD CONSTRAINT "UserBook_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
