import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

const prismadb = global.prisma || new PrismaClient();
if (process.env.Node_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
