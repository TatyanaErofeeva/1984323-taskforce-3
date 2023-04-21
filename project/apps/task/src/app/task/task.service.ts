import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task} from '@project/shared/app-types';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './task.entity';
import { fillObject } from '@project/util/util-core';
import { TaskRdo } from './rdo/task.rdo';
import { TaskQuery } from './query/task.query';

@Injectable()
export class TaskService {
    constructor(
        private readonly taskRepository: TaskRepository,
    ) { }

    async createTask(createTaskDto: CreateTaskDto) {
        const task = { ...createTaskDto};
        const taskEntity = new TaskEntity(task);
        const newTask = await this.taskRepository.create(taskEntity);
        
        return fillObject(TaskRdo, newTask);
    }

    async deleteTask(id: number): Promise<void> {
        this.taskRepository.destroy(id);
    }

    async getTask(id: number): Promise<Task> {
        return this.taskRepository.findById(id);
    }

    async getTasks(query: TaskQuery): Promise<Task[]> {
        return this.taskRepository.find(query);
    }

    async updateTask(_id: number, _dto: UpdateTaskDto): Promise<Task> {
        throw new Error('Not implemented…');
    }

}