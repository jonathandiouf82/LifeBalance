import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { GoalsService } from "../goals/goals.service";
import { Goal } from "../goals/goal.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { Operation } from "../operations/operations.entity";
import { User } from "../users/user.entity";
import { UsersService } from "../users/users.service";

@Controller('/crud/goals')
export class GoalsController {

  constructor(private goalService: GoalsService,
              private userService: UsersService) {}

  @Get("/getAll")
  findAll(): Promise<Goal[]> {
    return this.goalService.findAll();
  }

  @Get("/:user")
  async findAllByUser(@Param() params: any): Promise<Goal[]> {
    let user: User = await this.userService.findById(params.user)
    return this.goalService.findAllByUser(user);
  }

  @Get("/:id")
  findById(@Param() params: any): Promise<Goal> {
    return this.goalService.findById(params.id);
  }

  @Get("/get")
  findOne(@Query('title') title: string): Promise<Goal> {
    if(title != null) return this.goalService.findByTitle(title);
  }

  @Post("add")
  add(@Body() goal: Goal): Promise<Goal> {
    return this.goalService.add(goal);
  }

  @Put("/:id")
  update(@Param() params: any, @Body() goal: Goal): Promise<UpdateResult> {
    return this.goalService.update(params.id, goal);
  }

  @Delete("/:id")
  delete(@Param() params: any): Promise<DeleteResult> {
    return this.goalService.delete(params.id);
  }
}
