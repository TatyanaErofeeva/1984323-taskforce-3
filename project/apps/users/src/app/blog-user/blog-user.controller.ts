import { Body, Controller, Get, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@project/util/util-core';
import { UpdateUserDto } from './dto/update-user.dto';
import { CustomerUserRdo } from './rdo/customer-user.rdo';
import { AgentUserRdo } from './rdo/agent-user.rdo';
import { BlogUserService } from './blog-user.service';
import { MongoidValidationPipe } from '@project/shared/shared-pipes';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';
import { UserRole } from '@project/shared/app-types';

@ApiTags('profile')
@Controller('user')
export class BlogUserController {
    constructor(
        private readonly userService: BlogUserService
    ) { }

    @ApiResponse({
        type: CustomerUserRdo,
        status: HttpStatus.OK,
        description: 'User update'
    })
    @UseGuards(JwtAuthGuard)
    @Patch('update/:id')
    public async update(@Param('id', MongoidValidationPipe) id: string, @Body() dto: UpdateUserDto) {
        const taskUser = await this.userService.update(id, dto);
        return fillObject(CustomerUserRdo, taskUser);
    }

    @ApiResponse({
        type: CustomerUserRdo,
        status: HttpStatus.OK,
        description: 'User found'
    })
    @Get('customer/:id')
    public async customer(@Param('id', MongoidValidationPipe) id: string) {

        const existUser = await this.userService.getUser(id);
        if(existUser.role === UserRole.Customer){
            return fillObject(CustomerUserRdo, existUser);
        }
        else {
            throw new Error(`Customer не найден. Проверьте role`)
        }
    }

    @ApiResponse({
        type: AgentUserRdo,
        status: HttpStatus.OK,
        description: 'User found'
    })
    @Get('agent/:id')
    public async agent(@Param('id', MongoidValidationPipe) id: string) {

        const existUser = await this.userService.getUser(id);
        if (existUser.role === UserRole.Agent) {
            return fillObject(AgentUserRdo, existUser);
        }
        else {
             throw new Error(`Agent не найден. Проверьте role`) 
        }
    }
}