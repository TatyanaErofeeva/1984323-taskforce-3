import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { TaskEntity } from './task.entity';
import { Task } from '@project/shared/app-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaskRepository implements CRUDRepository<TaskEntity, number, Task> {
    constructor(private readonly prisma: PrismaService) { }

    public async create(item: TaskEntity): Promise<Task> {
        const entityData = item.toObject();

        return await this.prisma.task.create({
            data: {
                ...entityData,
                category: {
                    connectOrCreate: {
                        where: {
                            title: entityData.category.title
                        },
                        create: {
                            title: entityData.category.title
                        }
                    }
                },
                comments: {
                    connect: []
                }
            },
            include: {
                comments: true,
                category: true
            }
        });
    }

    public async destroy(taskId: number): Promise<void> {
        await this.prisma.task.delete({
            where: {
                taskId,
            }
        });
    }

    public async findById(taskId: number): Promise<Task> {
        return await this.prisma.task.findFirst({
            where: {
                taskId
            },
            include: {
                category: true,
                comments: true,
            }
        });
    }

    public find(): Promise<Task[]> {
        return this.prisma.task.findMany({
            include: {
                comments: true,
                category: true
            }
        });
    }

    public update(_id: number, _item: TaskEntity): Promise<Task> {
        return Promise.resolve(undefined);
    }
}