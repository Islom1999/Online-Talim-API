-- CreateEnum
CREATE TYPE "roles" AS ENUM ('Admin', 'User');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "roles" "roles"[] DEFAULT ARRAY['User']::"roles"[];
