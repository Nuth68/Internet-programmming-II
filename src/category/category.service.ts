import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CategoryService {
  private categories: { id: number; name: string }[] = [];
  private nextId = 1;

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((c) => c.id === id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  create(dto: { name: string }) {
    const category = { id: this.nextId++, name: dto.name };
    this.categories.push(category);
    return category;
  }
}