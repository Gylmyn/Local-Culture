/*
  Warnings:

  - You are about to drop the `TelusuriPin` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `desc` to the `Pin` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TelusuriPin" DROP CONSTRAINT "TelusuriPin_pinId_fkey";

-- AlterTable
ALTER TABLE "Pin" ADD COLUMN     "desc" TEXT NOT NULL;

-- DropTable
DROP TABLE "TelusuriPin";
