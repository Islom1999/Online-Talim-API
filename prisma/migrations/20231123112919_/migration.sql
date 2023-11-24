-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imageName" TEXT NOT NULL,
    "unused" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "images_imageName_key" ON "images"("imageName");
