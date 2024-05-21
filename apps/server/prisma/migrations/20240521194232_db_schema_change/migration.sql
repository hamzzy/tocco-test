/*
  Warnings:

  - You are about to drop the `Certificates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Impact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ImpactAttachments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ImpactFacts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `launchDate` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Certificates" DROP CONSTRAINT "Certificates_productId_fkey";

-- DropForeignKey
ALTER TABLE "Impact" DROP CONSTRAINT "Impact_productId_fkey";

-- DropForeignKey
ALTER TABLE "ImpactAttachments" DROP CONSTRAINT "ImpactAttachments_productId_fkey";

-- DropForeignKey
ALTER TABLE "ImpactFacts" DROP CONSTRAINT "ImpactFacts_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "launchDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Certificates";

-- DropTable
DROP TABLE "Impact";

-- DropTable
DROP TABLE "ImpactAttachments";

-- DropTable
DROP TABLE "ImpactFacts";

-- CreateTable
CREATE TABLE "ProductImpactData" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "totalCarbonFootprint" DOUBLE PRECISION NOT NULL,
    "reductionTargetCarbon" DOUBLE PRECISION NOT NULL,
    "reductionAchievementCarbon" DOUBLE PRECISION NOT NULL,
    "bioBasedContent" DOUBLE PRECISION NOT NULL,
    "wasteReduction" DOUBLE PRECISION NOT NULL,
    "totalWaterConsumption" DOUBLE PRECISION NOT NULL,
    "waterRecycled" DOUBLE PRECISION NOT NULL,
    "reductionAchievementWater" DOUBLE PRECISION NOT NULL,
    "mechanicalRecyclability" DOUBLE PRECISION NOT NULL,
    "chemicalRecyclability" DOUBLE PRECISION NOT NULL,
    "naturalRecyclability" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductImpactData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "certificateId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attachment" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "attachmentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductImpactData_productId_key" ON "ProductImpactData"("productId");

-- AddForeignKey
ALTER TABLE "ProductImpactData" ADD CONSTRAINT "ProductImpactData_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
