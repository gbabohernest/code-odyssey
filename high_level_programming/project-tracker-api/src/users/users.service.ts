import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateUser, UpdateUser, User } from './schema/user.schema';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: randomUUID(),
      name: 'John Doe',
      email: 'john@example.com',
      password: 'strong_password',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },

    {
      id: randomUUID(),
      name: 'Sarah Jones',
      email: 'sarah@email.com',
      password: 'cool-password',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  create(data: CreateUser): User {
    const user = {
      id: randomUUID(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.users.push(user);
    return user;
  }

  update(id: string, data: UpdateUser): User {
    const index = this.users.findIndex((u) => u.id === id);

    if (index === -1)
      throw new NotFoundException(`User with id ${id} was not found`);

    this.users[index] = {
      ...this.users[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    return this.users[index];
  }

  remove(id: string) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1)
      throw new NotFoundException(`User with id ${id} was not found`);

    this.users.splice(index, 1);
  }
}
