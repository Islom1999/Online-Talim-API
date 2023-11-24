/*
  Warnings:

  - You are about to drop the column `authorId` on the `courses` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_authorId_fkey";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "authorId";

-- CreateTable
CREATE TABLE "AdminCourse" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "AdminCourse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminCourse_userId_courseId_key" ON "AdminCourse"("userId", "courseId");

-- AddForeignKey
ALTER TABLE "AdminCourse" ADD CONSTRAINT "AdminCourse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminCourse" ADD CONSTRAINT "AdminCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
