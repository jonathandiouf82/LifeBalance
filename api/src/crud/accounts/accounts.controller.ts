import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { User } from "../users/user.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { AccountsService } from "../accounts/accounts.service";
import { UsersService } from "../users/users.service";
import { Account } from "../accounts/account.entity";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private accountService: AccountsService,
              private userService: UsersService) {}

  @Get("/getAll")
  findAll(): Promise<Account[]> {
    return this.accountService.findAll();
  }

  @Get("/:user")
  async findAllByUser(@Param() params: any): Promise<Account[]> {
    let user: User = await this.userService.findById(params.user)
    return this.accountService.findAllByUser(user);
  }

  @Get("/:id")
  findById(@Param() params: any): Promise<Account> {
    return this.accountService.findById(params.id);
  }

  @Post("add")
  add(@Body() account: Account): Promise<Account> {
    return this.accountService.add(account);
  }

  @Put("/:id")
  update(@Param() params: any, @Body() account: Account): Promise<UpdateResult> {
    return this.accountService.update(params.id, account);
  }

  @Delete("/:id")
  delete(@Param() params: any): Promise<DeleteResult> {
    return this.accountService.delete(params.id);
  }
}
