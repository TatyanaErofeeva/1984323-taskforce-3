import { Body, Controller, Post, Get, Param, UseGuards, Req, HttpCode, HttpStatus, Patch, Put, } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { fillObject } from '@project/util/util-core';
import { UserRdo } from './rdo/user.rdo';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MongoidValidationPipe } from '@project/shared/shared-pipes';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { NotifyService } from '../notify/notify.service';
import { LocalAuthGuard } from './guards/local-auth-guard';
import { RequestWithUser } from '@project/shared/app-types';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import UpdateUserPasswordDto from './dto/update-password.dto';
import { ResponseDto } from './dto/response-user.dto';

@ApiTags('authentication')
@Controller('auth')
export class AuthenticationController {
    constructor(
        private readonly authService: AuthenticationService,
        private readonly notifyService: NotifyService,
    ) { }

    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'The new user has been successfully created.'
    })
    @Post('register')
    public async create(@Body() dto: CreateUserDto) {
        const newUser = await this.authService.register(dto);
        const { email, fullname } = newUser;
        await this.notifyService.registerSubscriber({ email, fullname})
        return fillObject(UserRdo, newUser);
    }

    @UseGuards(LocalAuthGuard)
    @ApiResponse({
        type: LoggedUserRdo,
        status: HttpStatus.OK,
        description: 'User has been successfully logged.'
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Password or Login is wrong.',
    })
    @Post('login')
    @HttpCode(HttpStatus.OK)
    public async login(@Req() { user }: RequestWithUser) {
        return this.authService.createUserToken(user);
    }

    @ApiResponse({
        type: UserRdo,
        status: HttpStatus.OK,
        description: 'User found'
    })
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    public async show(@Param('id', MongoidValidationPipe) id: string) {
        const existUser = await this.authService.getUser(id);
        return fillObject(UserRdo, existUser);
    }

    @UseGuards(JwtRefreshGuard)
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get a new access/refresh tokens'
    })
    public async refreshToken(@Req() { user }: RequestWithUser) {
        return this.authService.createUserToken(user);
    }

    @ApiResponse({
        type: LoggedUserRdo,
        status: HttpStatus.OK,
        description: 'User password has been successfully updated'
    })
    @Patch('password')
    @UseGuards(JwtAuthGuard)
    public async updateUserPassword(id: string, @Body() dto: UpdateUserPasswordDto) {
        const updatedUser = await this.authService.updatePassword(id, dto);
        return fillObject(UserRdo, updatedUser);
    }

    @ApiResponse({
        status: HttpStatus.OK,
    })
    @Put(':id/response')
    async addResponse(@Param('id') id: string, @Body() responseDto: ResponseDto) {
        const userResponse = await this.authService.addResponse(id, responseDto);
        return fillObject(UserRdo, userResponse);
    }
}
