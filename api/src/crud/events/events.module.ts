import { Module } from '@nestjs/common';
import { EventsService } from "./events.service";
import { EventsController } from "./events.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEvent } from "./event.entity";
import {Goal} from "../goals/goal.entity";
import {TasksService} from "../tasks/tasks.service";
import {Task} from "../tasks/task.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Task, TaskEvent])],
    exports: [EventsService, TypeOrmModule.forFeature([Task, TaskEvent])],
    providers: [EventsService, TasksService],
    controllers: [EventsController]
})
export class EventsModule {}

