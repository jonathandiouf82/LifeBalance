import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { OperationsService } from "./operations.service";
import { Operation } from "./operations.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { Account } from "../accounts/account.entity";
import {AccountsService} from "../accounts/accounts.service";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('operations')
@Controller('crud/operation')
export class OperationsController {

  constructor(private operationsService: OperationsService,
              private accountService: AccountsService) {}

  @Get("/getAll")
  findAll(): Promise<Operation[]> {
    return this.operationsService.findAll();
  }

  @Get("/getByAcc/:account")
  async findAllByAccount(@Param() params: any): Promise<Operation[]> {
    let account: Account = await this.accountService.findById(params.account);
    return this.operationsService.findAllByAccount(account);
  }

  @Get("/get/:id")
  findById(@Param() params: any): Promise<Operation> {
    return this.operationsService.findById(params.id);
  }

  @Get("/getByCat/:category")
  findOne(@Param() params: any): Promise<Operation[]> {
    if(params.category != null) return this.operationsService.findAllByCategory(params.category);
  }

  @Post("add")
  add(@Body() operation: Operation): Promise<Operation> {
    return this.operationsService.add(operation);
  }

  @Put("/:id")
  update(@Param() params: any, @Body() operation: Operation): Promise<UpdateResult> {
    return this.operationsService.update(params.id, operation);
  }

  @Delete("/:id")
  delete(@Param() params: any): Promise<DeleteResult> {
    return this.operationsService.delete(params.id);
  }
}
