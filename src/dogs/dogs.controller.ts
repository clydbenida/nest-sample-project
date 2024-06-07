import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './dogs.interface';
import { CreateDogDto } from './dto/create-dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) { }

  @Post()
  async create(@Body() createDog: CreateDogDto) {
    this.dogsService.create(createDog);
  }

  @Get()
  async findAll() {
    return this.dogsService.findAll();
  }
}
