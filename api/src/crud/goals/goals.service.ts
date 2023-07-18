import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Goal } from "../goals/goal.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { User } from "../users/user.entity";
import { Operation } from "../operations/operations.entity";

@Injectable()
export class GoalsService {

  constructor(
    @InjectRepository(Goal)
    private goalRepository: Repository<Goal>
  ) {}

  async findAll(): Promise<Goal[]> {
    return this.goalRepository.find();
  }

  async findAllByUser(user: User): Promise<Goal[]> {
    return this.goalRepository.findBy({user});
  }

  async findById(id: number): Promise<Goal> {
    return this.goalRepository.findOneBy({id});
  }

  async findByTitle(title: string): Promise<Goal> {
    return this.goalRepository.findOneBy({title});
  }

  async add(goal: Goal): Promise<Goal> {
    return this.goalRepository.save(goal);
  }

  async update(id: number, goal: Goal): Promise<UpdateResult> {
    return this.goalRepository.update(id, goal);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.goalRepository.delete(id);
  }
}
