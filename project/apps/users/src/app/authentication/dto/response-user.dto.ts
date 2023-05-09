import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, Max, Min } from 'class-validator';
import {ValidateCondition} from '../authentication.constant';

export class ResponseDto {
    @ApiProperty({
        description: 'Текст отзыва',
        example: 'Спасибо'
    })
    @Length(ValidateCondition.MinResponseTextLength, ValidateCondition.MaxResponseTextLength)
    text: string;

    @ApiProperty({
        description: 'Идентификатор выполненой задачи',
        example: '1234567'
    })
    @IsString()
    idCompletedTask: string;

    @ApiProperty({
        description: 'Оценка',
        example: '5'
    })
    @Min(ValidateCondition.MinScore)
    @Max(ValidateCondition.MaxScore)
    score: number;
}