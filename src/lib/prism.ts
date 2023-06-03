// This will be the import file to access the prisma client across files.  We want to make sure we only have ONE copy of the prisma client active.
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export { prisma }