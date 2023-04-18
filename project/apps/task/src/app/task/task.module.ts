import { Module } from "@nestjs/common";
import { TaskCategoryModule } from '../task-category/task-category.module';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskRepository } from './task.repository';

@Module({
    imports: [TaskCategoryModule],
    controllers: [TaskController],
    providers: [TaskService, TaskRepository],
})
export class TaskModule { }