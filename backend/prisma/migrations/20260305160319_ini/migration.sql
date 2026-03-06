-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "numProduit" TEXT NOT NULL,
    "design" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "quantite" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
