import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResponseDto } from './dto/user-response.dto';
import { ZodResponse } from 'nestjs-zod';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ZodResponse({ type: [UserResponseDto] })
  @ApiOperation({ summary: 'Fetch all users' })
  findAll(): UserResponseDto[] {
    return this.userService.findAll();
  }

  @Get(':id')
  @ZodResponse({ type: UserResponseDto })
  @ApiOperation({ summary: 'Fetch a user by ID' })
  getUser(@Param('id') id: string): UserResponseDto {
    return this.userService.findOne(id);
  }

  @Post()
  @ZodResponse({ type: UserResponseDto })
  @ApiOperation({ summary: 'Create a user' })
  create(@Body() payload: CreateUserDto): UserResponseDto {
    return this.userService.create(payload);
  }

  @Patch(':id')
  @ZodResponse({ type: UserResponseDto })
  @ApiOperation({ summary: 'Update a user by ID' })
  update(
    @Param('id') id: string,
    @Body() payload: UpdateUserDto,
  ): UserResponseDto {
    return this.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a user by ID' })
  delete(@Param('id') id: string): void {
    this.userService.remove(id);
  }
}
