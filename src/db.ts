import { PrismaClient } from '@prisma/client';

interface CustomGlobal extends Window {
  prisma: PrismaClient;
}

declare let globalThis: CustomGlobal;

// eslint-disable-next-line import/no-mutable-exports
let prisma: PrismaClient;

if (!globalThis.prisma) {
  globalThis.prisma = new PrismaClient({
    log: ['info'],
  });
}

// eslint-disable-next-line prefer-const
prisma = globalThis.prisma;

export default prisma;
