import { Injectable } from '@nestjs/common';
import { Operation } from "./operations.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from "../user/user.entity";

@Injectable()
export class OperationsService {

  constructor(
    @InjectRepository(Operation)
    private operationRepository: Repository<Operation>
  ) { }

  async findAll(): Promise<Operation[]> {
    return this.operationRepository.find();
  }

  async findAllByUser(user: User): Promise<Operation[]> {
    return this.operationRepository.findBy({user});
  }

  async findById(id: number): Promise<Operation> {
    return this.operationRepository.findOneBy({id});
  }

  async findAllByCategory(category: string): Promise<Operation[]> {
    return this.operationRepository.findBy({category});
  }

  async add(operation: Operation): Promise<Operation> {
    return this.operationRepository.save(operation);
  }

  async update(id: number, operation: Operation): Promise<UpdateResult> {
    return this.operationRepository.update(id, operation);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.operationRepository.delete(id);
  }

}
