/*
  Warnings:

  - You are about to drop the column `subscriptionType` on the `UserCourse` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionType` on the `courses` table. All the data in the column will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "PaymentType" ADD VALUE 'ThreeMonth';
ALTER TYPE "PaymentType" ADD VALUE 'SixMonth';

-- AlterTable
ALTER TABLE "UserCourse" DROP COLUMN "subscriptionType";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "subscriptionType";

-- DropEnum
DROP TYPE "SubscriptionType";
