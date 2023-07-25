import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {TasksService} from "../tasks/tasks.service";
import {DeleteResult, UpdateResult} from "typeorm";
import {EventsService} from "./events.service";
import {TaskEvent} from "./event.entity";
import {Task} from "../tasks/task.entity";

@ApiTags('events')
@Controller('crud/events')
export class EventsController {

    constructor(private eventService: EventsService,
                private taskService: TasksService) {}

    @Get("/getAll")
    findAll(): Promise<TaskEvent[]> {
        return this.eventService.findAll();
    }

    @Get("/:task")
    async findAllByUser(@Param() params: any): Promise<TaskEvent[]> {
        let task: Task = await this.taskService.findById(params.task)
        return this.eventService.findAllByTask(task);
    }

    @Get("/:id")
    findById(@Param() params: any): Promise<TaskEvent> {
        return this.eventService.findById(params.id);
    }

    @Post("add")
    add(@Body() event: TaskEvent): Promise<TaskEvent> {
        return this.eventService.add(event);
    }

    @Put("/:id")
    update(@Param() params: any, @Body() event: TaskEvent): Promise<UpdateResult> {
        return this.eventService.update(params.id, event);
    }

    @Delete("/:id")
    delete(@Param() params: any): Promise<DeleteResult> {
        return this.eventService.delete(params.id);
    }
}
