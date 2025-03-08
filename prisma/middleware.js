import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Middleware to update dateStarted when status is set to READING
prisma.$use(async (params, next) => {
  if (params.model === "UserBook" && params.action === "update") {
    const { data, where } = params;

    if (data.status === "READING" && !data.dateStarted) {
      data.dateStarted = new Date(); // Set current date if not already set
    }

    if (data.status === "READ" && !data.dateAdded) {
      data.dateAdded = new Date(); // Set current date if not already set
    }
  }

  return next(params);
});

export default prisma;
