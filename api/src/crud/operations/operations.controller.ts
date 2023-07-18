import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { OperationsService } from "./operations.service";
import { Operation } from "./operations.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { User } from "../users/user.entity";
import { UsersService } from "../users/users.service";

@Controller('crud/operation')
export class OperationsController {

  constructor(private operationsService: OperationsService,
              private userService: UsersService) {}

  @Get("/")
  findAll(): Promise<Operation[]> {
    return this.operationsService.findAll();
  }

  @Get("/:user")
  async findAllByUser(@Param() params: any): Promise<Operation[]> {
    let user: User = await this.userService.findById(params.user)
    return this.operationsService.findAllByUser(user);
  }

  @Get("/:id")
  findById(@Param() params: any): Promise<Operation> {
    return this.operationsService.findById(params.id);
  }

  @Get("/get")
  findOne(@Query('category') category: string): Promise<Operation[]> {
    if(category != null) return this.operationsService.findAllByCategory(category);
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
