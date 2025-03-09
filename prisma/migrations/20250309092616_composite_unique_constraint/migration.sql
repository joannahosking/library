/*
  Warnings:

  - A unique constraint covering the columns `[googleId,userId]` on the table `UserBook` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "UserBook_googleId_key";

-- CreateIndex
CREATE UNIQUE INDEX "UserBook_googleId_userId_key" ON "UserBook"("googleId", "userId");
