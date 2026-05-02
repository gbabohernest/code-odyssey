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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { Users } from './entities/users.entities';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Fetch all users' })
  async findAll(): Promise<Users[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Fetch a user by ID' })
  async getUser(@Param('id') id: string): Promise<Users> {
    return await this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a user' })
  async create(@Body() payload: CreateUserDto): Promise<Users> {
    return await this.userService.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  async update(
    @Param('id') id: string,
    @Body() payload: UpdateUserDto,
  ): Promise<Users> {
    return this.userService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a user by ID' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.userService.remove(id);
  }
}
