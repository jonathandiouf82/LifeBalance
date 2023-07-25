import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TaskEvent } from './event.entity';
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Task } from "../tasks/task.entity";

@Injectable()
export class EventsService {

  constructor(
    @InjectRepository(TaskEvent)
    private eventRepository: Repository<TaskEvent>
  ) {}

  async findAll(): Promise<TaskEvent[]> {
    return this.eventRepository.find();
  }

  async findAllByTask(task: Task): Promise<TaskEvent[]> {
    return this.eventRepository.findBy({task});
  }

  async findById(id: number): Promise<TaskEvent> {
    return this.eventRepository.findOneBy({id});
  }

  async add(event: TaskEvent): Promise<TaskEvent> {
    return this.eventRepository.save(event);
  }

  async update(id: number, event: TaskEvent): Promise<UpdateResult> {
    return this.eventRepository.update(id, event);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.eventRepository.delete(id);
  }
}
