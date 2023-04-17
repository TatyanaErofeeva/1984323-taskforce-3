-- CreateTable
CREATE TABLE "Task" (
    "taskId" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "category" TEXT NOT NULL DEFAULT '',
    "cost" INTEGER DEFAULT 0,
    "dueDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "picture" TEXT DEFAULT '',
    "address" TEXT DEFAULT '',
    "tagSet" TEXT DEFAULT '',
    "city" TEXT DEFAULT '',
    "userId" TEXT DEFAULT '',

    CONSTRAINT "Task_pkey" PRIMARY KEY ("taskId")
);
