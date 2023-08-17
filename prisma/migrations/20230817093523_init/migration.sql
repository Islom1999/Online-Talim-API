/*
  Warnings:

  - Added the required column `paymentType` to the `UserCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionType` to the `UserCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentType` to the `courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionType` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('OneTime', 'Monthly');

-- CreateEnum
CREATE TYPE "SubscriptionType" AS ENUM ('OneTime', 'Monthly', 'Free');

-- AlterTable
ALTER TABLE "UserCourse" ADD COLUMN     "paymentType" "PaymentType" NOT NULL,
ADD COLUMN     "subscriptionEnd" TIMESTAMP(3),
ADD COLUMN     "subscriptionStart" TIMESTAMP(3),
ADD COLUMN     "subscriptionType" "SubscriptionType" NOT NULL;

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "isPaid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "paymentType" "PaymentType" NOT NULL,
ADD COLUMN     "subscriptionType" "SubscriptionType" NOT NULL;
