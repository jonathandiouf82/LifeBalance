import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from './event.entity';
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Task } from "../tasks/task.entity";

@Injectable()
export class EventsService {

  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>
  ) {}

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  async findAllByTask(task: Task): Promise<Event[]> {
    return this.eventRepository.findBy({task});
  }

  async findById(id: number): Promise<Event> {
    return this.eventRepository.findOneBy({id});
  }

  async add(event: Event): Promise<Event> {
    return this.eventRepository.save(event);
  }

  async update(id: number, event: Event): Promise<UpdateResult> {
    return this.eventRepository.update(id, event);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.eventRepository.delete(id);
  }
}
