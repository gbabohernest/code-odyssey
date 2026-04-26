import { CreateUserSchema } from '../schema/user.schema';
import { createZodDto } from 'nestjs-zod';

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
