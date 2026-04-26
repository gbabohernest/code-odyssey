import { UserResponseSchema } from '../schema/user.schema';
import { createZodDto } from 'nestjs-zod';

export class UserResponseDto extends createZodDto(UserResponseSchema) {}
