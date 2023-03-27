import { Injectable } from '@nestjs/common'; 
import { TaskMemoryRepository } from '../task/task-memory.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from '../task/task.entity';

@Injectable()
export class TaskService {
        constructor(
            private readonly taskRepository: TaskMemoryRepository
        ) { }

    public async create(dto: CreateTaskDto) {
        const { title, description, category, cost, dueDate, picture, address, tagsSet, city } = dto;

        const task = {
            title, description, category, cost,
            picture, dueDate, address, tagsSet, 
            city
        };

        const taskEntity = await new TaskEntity(task);

        return this.taskRepository
          .create(taskEntity);
    }

    public async getTask(id: string) {
        return this.taskRepository.findById(id);
    }
}