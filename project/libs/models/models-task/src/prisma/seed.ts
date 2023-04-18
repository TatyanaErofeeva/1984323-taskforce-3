import { PrismaClient } from '@prisma/client';
import { now } from 'mongoose';

const prisma = new PrismaClient()

async function fillDb() {
    await prisma.task.upsert({
        where: { taskId: 1 },
        update: {},
        create: {
            title: 'Задание для исполнителей',
            description: 'Отличное задание. Подойдет любому.',
            cost: 3000,
            dueDate: now(),
            status: 'Новое',
            picture: '1.jpg',
            address: 'ул. Можайского, д. 82',
            city: 'Москва',
            userId: '1',
            category: {
                create: {
                    categoryId: 1,
                    title: 'Доп. заработок'
                }
            },
            comments: {
                create: {
                    commentId: 1,
                    message: 'В чем суть задания?',
                    userId: '1',
                }
            }

        }
    });

    await prisma.task.upsert({
        where: { taskId: 2 },
        update: {},
        create: {
            title: 'Обивка дивана',
            description: 'Поменять обивку дивана на дому',
            cost: 10000,
            dueDate: now(),
            status: 'Новое',
            picture: '2.jpg',
            address: 'ул. Стрелецкая, д. 82',
            city: 'Владивосток',
            userId: '2',
            category: {
                create: {
                    categoryId: 2,
                    title: 'Ручная работа'
                }
            },
            comments: {
                create: {
                    commentId: 2,
                    message: 'Какая ткань нужна?',
                    userId: '2',
                }
            }

        }
    });
    console.info('🤘️ Database was filled')
}

fillDb()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (err) => {
        console.error(err);
        await prisma.$disconnect()

        process.exit(1);
    })