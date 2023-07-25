import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Task } from "./task.entity";

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findById(id: number): Promise<Task> {
    return this.taskRepository.findOneBy({id});
  }

  async findByTitle(title: string): Promise<Task> {
    return this.taskRepository.findOneBy({title});
  }

  async add(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  async update(id: number, task: Task): Promise<UpdateResult> {
    return this.taskRepository.update(id, task);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.taskRepository.delete(id);
  }
}
