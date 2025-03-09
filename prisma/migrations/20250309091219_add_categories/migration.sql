/*
  Warnings:

  - A unique constraint covering the columns `[googleId]` on the table `UserBook` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserBook_googleId_key" ON "UserBook"("googleId");
