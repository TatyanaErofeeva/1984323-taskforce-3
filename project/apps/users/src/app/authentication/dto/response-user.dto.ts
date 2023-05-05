import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, Max, Min } from 'class-validator';
import { RESPONSE_TEXT_LENGTH_MIN, RESPONSE_TEXT_LENGTH_MAX, SCORE_MIN, SCORE_MAX } from '../authentication.constant';

export class ResponseDto {
    @ApiProperty({
        description: 'Текст отзыва',
        example: 'Спасибо'
    })
    @Length(RESPONSE_TEXT_LENGTH_MIN, RESPONSE_TEXT_LENGTH_MAX)
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
    @Min(SCORE_MIN)
    @Max(SCORE_MAX)
    score: number;
}