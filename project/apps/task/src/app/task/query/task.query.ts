import { IsEnum, IsIn, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { DEFAULT_TASK_COUNT_LIMIT, DEFAULT_SORT_ORDER, DEFAULT_SORT_TYPE, DEFAULT_PAGINATION_COUNT } from '../task.constant';
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
    public sortDirection?: SortOrder = DEFAULT_SORT_ORDER;

    @IsIn(['createdAt', 'popularTasks', 'commentsCount'])
    @IsOptional()
    public sortType?: SortType = DEFAULT_SORT_TYPE;

    @IsOptional()
    @Transform(({ value }) => +value)
    public limit?: number = DEFAULT_TASK_COUNT_LIMIT;

    @IsOptional()
    @Transform(({ value }) => +value)
    public page?: number = DEFAULT_PAGINATION_COUNT;
}