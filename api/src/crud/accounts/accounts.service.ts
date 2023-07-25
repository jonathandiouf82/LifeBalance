import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Account } from "../accounts/account.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { User } from "../users/user.entity";

@Injectable()
export class AccountsService {

  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>
  ) {}

  async findAll(): Promise<Account[]> {
    return this.accountRepository.find();
  }

  async findById(id: number): Promise<Account> {
    return this.accountRepository.findOneBy({id});
  }

  async findAllByUser(user: User): Promise<Account[]> {
    return this.accountRepository.findBy({user});
  }

  async findAllByBank(bank_name: string): Promise<Account[]> {
    return this.accountRepository.findBy({bank_name});
  }

  async add(account: Account): Promise<Account> {
    return this.accountRepository.save(account);
  }

  async update(id: number, account: Account): Promise<UpdateResult> {
    return this.accountRepository.update(id, account);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.accountRepository.delete(id);
  }
}
