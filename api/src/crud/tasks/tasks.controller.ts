import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { Task } from "../tasks/task.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { TasksService } from "./tasks.service";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('tasks')
@Controller('/crud/tasks')
export class TasksController {
  constructor(private taskService: TasksService) { }

  @Get("/getAll")
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get("/:id")
  findById(@Param() params: any): Promise<Task> {
    return this.taskService.findById(params.id);
  }

  @Get("/get")
  findOne(@Query('title') title: string): Promise<Task> {
    if(title != null) return this.taskService.findByTitle(title);
  }

  @Post("add")
  add(@Body() task: Task): Promise<Task> {
    return this.taskService.add(task);
  }

  @Put("/:id")
  update(@Param() params: any, @Body() task: Task): Promise<UpdateResult> {
    return this.taskService.update(params.id, task);
  }

  @Delete("/:id")
  delete(@Param() params: any): Promise<DeleteResult> {
    return this.taskService.delete(params.id);
  }
}
