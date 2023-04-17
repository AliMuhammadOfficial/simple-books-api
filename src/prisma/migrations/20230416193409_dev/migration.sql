-- CreateTable
CREATE TABLE "ApiClient" (
    "id" SERIAL NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "clientName" TEXT,

    CONSTRAINT "ApiClient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ApiClient_clientEmail_key" ON "ApiClient"("clientEmail");
