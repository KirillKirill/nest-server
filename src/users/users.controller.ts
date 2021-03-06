import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param, UseFilters,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import {BadRequestExceptionFilter} from "../exceptionFilter/badRequestExceptionFilter";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('getUsers')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('getUser/:id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

  @Get()
  getUserByEmail(email: string) {
    return this.usersService.getUserByEmail(email);
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @UseFilters(new BadRequestExceptionFilter())
  @Put('user/:id')
  async updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return await this.usersService.updateUser(Number(id), user);
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: string) {
    return await this.usersService.deleteUser(Number(id));
  }
}
