import { UpdateUserSchema } from '../schema/user.schema';
import { createZodDto } from 'nestjs-zod';

export class UpdateUserDto extends createZodDto(UpdateUserSchema) {}
