import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class TaskService {
  getTask(id: string) {
    console.log(id);
    return {
      name: 'Task 1',
      description: 'Description of Task 1',
      createdAt: new Date().toISOString(),
      completedAt: null,
      userId: 1,
    };
  }
  createTask(body: any) {
    console.log(body);
    return {
      name: 'Task 1',
      description: 'Description of Task 1',
      createdAt: new Date().toISOString(),
      completedAt: null,
      userId: 1,
    };
  }
  updateTask(id: string, body: any) {
    console.log(body);
    return {
      name: 'Task 1',
      description: 'Description of Task 1',
      createdAt: new Date().toISOString(),
      completedAt: null,
      userId: 1,
    };
  }
  deleteTask(id: string) {
    console.log(id);
    return { message: 'success' };
  }
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
  ) {}

  create(taskData: Partial<Task>) {
    const task = this.taskRepo.create(taskData);
    return this.taskRepo.save(task);
  }

  findAll() {
    return this.taskRepo.find({
      relations: ['user'],
    });
  }

  findOne(id: number) {
    return this.taskRepo.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async update(id: number, taskData: Partial<Task>) {
    await this.taskRepo.update(id, taskData);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.taskRepo.delete(id);
  }
}
