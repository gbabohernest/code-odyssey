//create our schema using zod

import { z } from 'zod';

export const UserSchema = z
  .object({
    id: z.uuid(),
    name: z.string().min(1, 'username is required').max(50),
    email: z.email('Invalid email ID'),
    password: z
      .string()
      .min(5, 'Password must not be less than five characters'),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
  })
  .meta({
    id: 'User',
  });

export type User = z.infer<typeof UserSchema>;

export const CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).meta({ id: 'CreateUser' });

export type CreateUser = z.infer<typeof CreateUserSchema>;

export const UpdateUserSchema = CreateUserSchema.partial().meta({
  id: 'UpdateUser',
});

export type UpdateUser = z.infer<typeof UpdateUserSchema>;

export const UserResponseSchema = UserSchema.meta({ id: 'UserResponse' });
export type UserResponse = z.infer<typeof UserResponseSchema>;
