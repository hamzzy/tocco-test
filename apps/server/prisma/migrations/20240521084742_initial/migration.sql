-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Impact" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "carbonFootprint" DOUBLE PRECISION NOT NULL,
    "reductionTargets" DOUBLE PRECISION NOT NULL,
    "reductionAchievements" DOUBLE PRECISION NOT NULL,
    "waterConsumption" DOUBLE PRECISION NOT NULL,
    "waterRecycled" DOUBLE PRECISION NOT NULL,
    "bioBasedContent" DOUBLE PRECISION NOT NULL,
    "initialWaste" DOUBLE PRECISION,
    "finalWaste" DOUBLE PRECISION,

    CONSTRAINT "Impact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificates" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "filePath" TEXT NOT NULL,

    CONSTRAINT "Certificates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImpactAttachments" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "filePath" TEXT NOT NULL,

    CONSTRAINT "ImpactAttachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImpactFacts" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ImpactFacts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Impact" ADD CONSTRAINT "Impact_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificates" ADD CONSTRAINT "Certificates_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImpactAttachments" ADD CONSTRAINT "ImpactAttachments_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImpactFacts" ADD CONSTRAINT "ImpactFacts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
