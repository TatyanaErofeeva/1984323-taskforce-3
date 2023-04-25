import { IsArray, IsDate, IsEnum, IsNumber, IsOptional, IsString, Length, Min, MinDate} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Category, City } from "@project/shared/app-types";
import { Transform } from "class-transformer";
import { 
    MIN_DESCRIPTION_LENGTH,
    MAX_DESCRIPTION_LENGTH,
    MIN_TITLE_LENGTH,
    MAX_TITLE_LENGTH,
    MIN_COST,
    MIN_ADDRESS_LENGTH,
    MAX_ADDRESS_LENGTH 
} from '../task.constant';


export class CreateTaskDto {
    @ApiProperty({
        description: 'Заголовок задания',
        example: 'Забить гвоздь'
    })
    @IsString()
    @Length(MIN_TITLE_LENGTH, MAX_TITLE_LENGTH)
    public title: string;

    @ApiProperty({
        description: 'Описание задания',
        example: 'Нужно забить гвоздь, чтобы повесить картину'
    })
    @IsString()
    @Length(MIN_DESCRIPTION_LENGTH, MAX_DESCRIPTION_LENGTH)
    public description: string;

    @ApiProperty({
        description: 'Категория задания',
        example: 'Подработка на час'
    })
    public category: Category;

    @ApiProperty({
        description: 'Статус задания',
        example: 'Новое'
    })
    @IsString()
    public status: string;

    @ApiProperty({
        description: 'Стоимость за работу/услугу',
        example: '1000'
    })
    @IsOptional()
    @IsNumber()
    @Min(MIN_COST)
    public cost?: number;

    @ApiProperty({
        description: 'Срок выполнения задания',
        example: '2023-04-24'
    })
    @IsDate()
    @MinDate(new Date())
    @IsOptional()
    public dueDate?: Date;

    @ApiProperty({
        description: 'Изображение',
        example: 'гвоздь.jpg'
    })
    @IsOptional()
    public picture?: string;

    @ApiProperty({
        description: 'Адрес',
        example: 'Москва, ул. Информационная, д. 1'
    })
    @IsOptional()
    @IsString()
    @Length(MIN_ADDRESS_LENGTH, MAX_ADDRESS_LENGTH)
    public address?: string;

    @ApiProperty({
        description: 'Массив тегов',
        example: ['новое', 'ручная работа']
    })
    @IsArray()
    @IsOptional()
    tags?: number[];
    public tagSet?: string[];
    
    @ApiProperty({
        description: 'Один из городов: Москва, Владивосток, Санкт-Петербург',
        example: 'Москва'
    })
    @IsEnum(City)
    @Transform(({ value }) => value as City)
    public city: City;

    @ApiProperty({
        description: 'Автор задания',
        example: 'jshjehg6'
    })
    public userId: string;
}