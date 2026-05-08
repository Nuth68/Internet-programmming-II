import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products: {
    id: number;
    name: string;
    price: number;
    categoryId: number;
  }[] = [];
  private nextId = 1;

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  findByCategory(categoryId: number) {
    return this.products.filter((p) => p.categoryId === categoryId);
  }

  create(dto: { name: string; price: number; categoryId: number }) {
    const product = { id: this.nextId++, ...dto };
    this.products.push(product);
    return product;
  }
}