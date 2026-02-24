import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class UserService {
  createUser(body: any) {
    console.log(body);
    return {
      username: 'Dara',
      email: 'dara@gmail.com',
      password: '123',
    };
  }
  getUser(username: string) {
    console.log(username);
    return {
      username: 'Dara',
      email: 'dara@gmail.com',
      password: '123',
    };
  }
  updateUser(body: any) {
    console.log(body);
    return {
      username: 'Dara',
      email: 'dara@gmail.com',
      password: '123',
    };
  }
  deleteUser(username: string) {
    console.log(username);
    return { message: 'success' };
  }
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  create(userData: Partial<User>) {
    const user = this.userRepo.create(userData);
    return this.userRepo.save(user);
  }
  findAll() {
    return this.userRepo.find({ relations: ['tasks'] });
  }
  findOne(id: number) {
    return this.userRepo.findOne({ where: { id }, relations: ['tasks'] });
  }
  async update(id: number, userData: Partial<User>) {
    await this.userRepo.update(id, userData);
    return this.findOne(id);
  }
  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
