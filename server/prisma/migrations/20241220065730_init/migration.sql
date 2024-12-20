/*
  Warnings:

  - You are about to drop the column `image` on the `Commodity` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Commodity` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `Commodity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Commodity" DROP COLUMN "image",
ADD COLUMN     "number" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Commodity_name_key" ON "Commodity"("name");
