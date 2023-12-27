-- CreateTable
CREATE TABLE "Artikel" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Artikel_pkey" PRIMARY KEY ("id")
);
