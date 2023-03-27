import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @ApiProperty({
        description: 'Заголовок задания',
        example: 'Забить гвоздь'
    })
    public title: string;

    @ApiProperty({
        description: 'Описание задания',
        example: 'Не можем забить гвоздь'
    })
    public description: string;

    @ApiProperty({
        description: 'Категория задания',
        example: 'Услуги'
    })
    public category: string;

    @ApiProperty({
        description: 'Стоимость',
        example: '100'
    })
    public cost?: number;

    @ApiProperty({
        description: 'Срок исполнения',
        example: '23.04.2023'
    })
    public dueDate?: Date;

    @ApiProperty({
        description: 'Изображение',
        example: 'гвоздь.jpg'
    })
    public picture?: string;

    @ApiProperty({
        description: 'Адрес',
        example: 'Москва, ул. Московская, д. 3'
    })
    public address?: string;

    @ApiProperty({
        description: 'Список тегов к заданию',
        example: 'гвоздь, забить гвоздь, помощь по дому'
    })
    public tagsSet?: string[];

    @ApiProperty({
        description: 'Город. Может быть один из списка: Москва, Санкт-Петербург, Владивосток',
        example: 'Москва'
    })
    public city?: string;
}