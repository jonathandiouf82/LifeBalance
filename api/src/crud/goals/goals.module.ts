import { Module } from '@nestjs/common';
import { GoalsService } from "./goals.service";
import { GoalsController } from "./goals.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Goal } from "./goal.entity";
import {UsersService} from "../users/users.service";
import {User} from "../users/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Goal, User])],
    exports: [GoalsService, TypeOrmModule.forFeature([Goal, User])],
    providers: [GoalsService, UsersService],
    controllers: [GoalsController]
})
export class GoalsModule {}

