/*
  Warnings:

  - You are about to drop the column `subscriptionEnd` on the `UserCourse` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionStart` on the `UserCourse` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserCourse" DROP COLUMN "subscriptionEnd",
DROP COLUMN "subscriptionStart",
ADD COLUMN     "dateEnd" TIMESTAMP(3),
ADD COLUMN     "dateStart" TIMESTAMP(3);
