import { PrismaClient } from "@prisma/client";

// Create a global variable for Prisma
declare global {
  var prisma: PrismaClient;
}

// Initialize Prisma client
export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  // Assign Prisma client to the global variable
  global.prisma = prisma;
}

export default prisma;
