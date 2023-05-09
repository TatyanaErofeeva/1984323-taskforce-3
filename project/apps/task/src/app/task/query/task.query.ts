import { IsEnum, IsIn, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import {DefaultData} from '../task.constant';
import { SortType, TaskStatus, City, SortOrder } from '@project/shared/app-types';

export class TaskQuery {
    @Transform(({ value }) => +value)
    @IsOptional()
    public categoryId?: number;

    @Transform(({ value }) => value as TaskStatus)
    @IsEnum(TaskStatus,)
    @IsOptional()
    public status?: TaskStatus;

    @Transform(({ value }) => value as City)
    @IsEnum(City,)
    @IsOptional()
    public city?: City;

    @IsIn(['asc', 'desc'])
    @IsOptional()
    public sortDirection?: SortOrder = SortOrder.Descended;

    @IsIn(['createdAt', 'popularTasks', 'commentsCount'])
    @IsOptional()
    public sortType?: SortType = SortType.CreatedAt;

    @IsOptional()
    @Transform(({ value }) => +value)
    public limit?: number = DefaultData.TaskCountLimit;

    @IsOptional()
    @Transform(({ value }) => +value)
    public page?: number = DefaultData.PaginationCount;
}