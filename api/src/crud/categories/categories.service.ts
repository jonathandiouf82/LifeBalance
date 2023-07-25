import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {Category} from "./category.entity";

@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ) {}

    async findAll(): Promise<Category[]> {
        return this.categoryRepository.find();
    }

    async findById(id: number): Promise<Category> {
        return this.categoryRepository.findOneBy({id});
    }

    async add(category: Category): Promise<Category> {
        return this.categoryRepository.save(category);
    }

    async update(id: number, event: Category): Promise<UpdateResult> {
        return this.categoryRepository.update(id, event);
    }

    async delete(id: number): Promise<DeleteResult> {
        return this.categoryRepository.delete(id);
    }
}
