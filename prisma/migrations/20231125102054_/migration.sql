/*
  Warnings:

  - Made the column `courseId` on table `parts` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "parts" DROP CONSTRAINT "parts_courseId_fkey";

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "order" INTEGER;

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "order" INTEGER;

-- AlterTable
ALTER TABLE "parts" ALTER COLUMN "courseId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "parts" ADD CONSTRAINT "parts_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
