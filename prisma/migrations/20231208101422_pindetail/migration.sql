-- CreateTable
CREATE TABLE "Pin" (
    "id" SERIAL NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Pin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TelusuriPin" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "pinId" INTEGER NOT NULL,

    CONSTRAINT "TelusuriPin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Videos" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Videos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fotos" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Fotos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "prgress" TEXT NOT NULL,
    "deadline" TEXT NOT NULL,
    "nilai" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TelusuriPin" ADD CONSTRAINT "TelusuriPin_pinId_fkey" FOREIGN KEY ("pinId") REFERENCES "Pin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
