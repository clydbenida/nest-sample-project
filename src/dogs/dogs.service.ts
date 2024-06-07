import { Injectable } from '@nestjs/common';
import { Dog } from './dogs.interface';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [
    {
      name: 'Nuggets',
      age: 1.8,
      breed: 'American Village Dog',
    },
  ];

  create(dog: Dog) {
    this.dogs.push(dog);
  }

  findAll() {
    return this.dogs;
  }
}
