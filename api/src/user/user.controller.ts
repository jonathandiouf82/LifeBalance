import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { DeleteResult, UpdateResult } from "typeorm";

@Controller('/crud/user')
export class UserController {

  constructor(private userService: UserService) { }

  @Get("/getAll")
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get("/:id")
  findById(@Param() params: any): Promise<User> {
    return this.userService.findById(params.id);
  }

  @Get("/get")
  findOne(@Query('name') name: string,
          @Query('email') email: string,
          @Query('accountNum') accountNum: number): Promise<User> {
    if(name != null) return this.userService.findByName(name);
    if(email != null) return this.userService.findByEmail(email);
    if(accountNum != null) return this.userService.findByAccountNum(accountNum);
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
