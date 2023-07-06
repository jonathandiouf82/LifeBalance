import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";

import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    return this.userRepository.findOneBy({id});
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({email});
  }

  async findByName(name: string): Promise<User> {
    return this.userRepository.findOneBy({name});
  }

  async findByAccountNum(accountNum: number): Promise<User> {
    return this.userRepository.findOneBy({accountNum})
  }

  async add(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: User): Promise<UpdateResult> {
    return this.userRepository.update(id, user);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
