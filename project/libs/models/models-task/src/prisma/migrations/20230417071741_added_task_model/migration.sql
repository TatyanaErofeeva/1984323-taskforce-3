/*
  Warnings:

  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Task";

-- CreateTable
CREATE TABLE "tasks" (
    "task_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "category" TEXT NOT NULL DEFAULT '',
    "cost" INTEGER DEFAULT 0,
    "dueDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "picture" TEXT DEFAULT '',
    "address" TEXT DEFAULT '',
    "tag_set" TEXT DEFAULT '',
    "city" TEXT DEFAULT '',
    "user_id" TEXT DEFAULT '',

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("task_id")
);
