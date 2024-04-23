-- CreateTable
CREATE TABLE "Achievements" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "scale" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "urlImg" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Achievements_pkey" PRIMARY KEY ("id")
);
