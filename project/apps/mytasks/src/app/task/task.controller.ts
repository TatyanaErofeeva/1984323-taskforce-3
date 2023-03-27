import { Controller, Get, Param, Body, Post,HttpStatus } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskRdo } from './rdo/task.rdo';
import { fillObject } from '@project/util/util-core';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
        constructor(
            private readonly taskService: TaskService
        ) { }

    @ApiResponse({
        type: CreateTaskDto,
        status: HttpStatus.CREATED,
    })
    @Post('create')
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto);
    }
 
    @ApiResponse({
        type: TaskRdo,
        status: HttpStatus.OK,
    }) 
    @Get(':id')
    public async show(@Param('id') id: string) {
        const existTask = await this.taskService.getTask(id);
        return fillObject(TaskRdo, existTask);
    }
  
}

