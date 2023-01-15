import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const main = async () => {
  const tasks = ['買い物に行く', '部屋を片付ける', '勉強をする'];
  await Promise.all(
    tasks.map((task) => {
      return prisma.task.create({ data: { title: task } });
    }),
  );
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
