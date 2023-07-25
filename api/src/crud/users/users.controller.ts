import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { DeleteResult, UpdateResult } from "typeorm";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('users')
@Controller('/crud/users')
export class UsersController {

  constructor(private userService: UsersService) { }

  @Get("/getAll")
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get("/:id")
  findById(@Param() params: any): Promise<User> {
    return this.userService.findById(params.id);
  }

  @Get("/get")
  findOne(@Query('username') username: string,
          @Query('email') email: string): Promise<User> {
    if(username != null) return this.userService.findByUsername(username);
    if(email != null) return this.userService.findByEmail(email);
  }

  @Post("add")
  add(@Body() user: User): Promise<User> {
    return this.userService.add(user);
  }

  @Put("/:id")
  update(@Param() params: any, @Body() user: User): Promise<UpdateResult> {
    return this.userService.update(params.id, user);
  }

  @Delete("/:id")
  delete(@Param() params: any): Promise<DeleteResult> {
    return this.userService.delete(params.id);
  }
}
