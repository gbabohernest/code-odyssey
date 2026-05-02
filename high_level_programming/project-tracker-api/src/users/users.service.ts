import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUser, UpdateUser } from './schema/user.schema';
import { EntityManager, Repository } from 'typeorm';
import { Users } from './entities/users.entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private readonly entityManager: EntityManager,
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<Users> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('No User found!');

    return user;
  }

  async create(data: CreateUser): Promise<Users> {
    const user = new Users(data);
    return await this.entityManager.save(user);
  }

  async update(id: string, payload: UpdateUser) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('No user found');

    Object.assign(user, payload);
    return await this.entityManager.save(user);
  }

  async remove(id: string) {
    const result = await this.usersRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException('No User Found');
    }
  }
}
