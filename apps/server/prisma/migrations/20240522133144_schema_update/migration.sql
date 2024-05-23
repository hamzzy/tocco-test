/*
  Warnings:

  - You are about to drop the column `launchDate` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Certificate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_productId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "launchDate",
ADD COLUMN     "certificates" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "image" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "Certificate";
