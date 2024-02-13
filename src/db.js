const { PrismaClient } = require("@prisma/client");
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const globalForPrisma = global;

if (!globalForPrisma.prisma) {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL
    });
    const adapter = new PrismaPg(pool);
    globalForPrisma.prisma = new PrismaClient({ adapter });
}

const prisma = globalForPrisma.prisma;

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

module.exports = { prisma };
