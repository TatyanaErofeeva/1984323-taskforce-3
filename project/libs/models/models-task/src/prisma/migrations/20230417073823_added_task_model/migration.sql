/*
  Warnings:

  - You are about to drop the column `category` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `tasks` table. All the data in the column will be lost.
  - The `tag_set` column on the `tasks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `category_name` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "category",
DROP COLUMN "user_id",
ADD COLUMN     "author_id" TEXT,
ADD COLUMN     "category_name" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" TEXT,
ALTER COLUMN "cost" DROP DEFAULT,
ALTER COLUMN "dueDate" DROP DEFAULT,
ALTER COLUMN "picture" DROP DEFAULT,
ALTER COLUMN "address" DROP DEFAULT,
DROP COLUMN "tag_set",
ADD COLUMN     "tag_set" TEXT[],
ALTER COLUMN "city" DROP DEFAULT;

-- CreateTable
CREATE TABLE "categories" (
    "category_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("category_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_title_key" ON "categories"("title");

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_category_name_fkey" FOREIGN KEY ("category_name") REFERENCES "categories"("title") ON DELETE RESTRICT ON UPDATE CASCADE;
