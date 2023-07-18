import { Module } from '@nestjs/common';
import { OperationsService } from "./operations.service";
import { OperationsController } from "./operations.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Operation } from "./operations.entity";
import { UsersService } from "../users/users.service";
import { User } from "../users/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Operation, User])],
  exports: [OperationsService],
  providers: [OperationsService, UsersService],
  controllers: [OperationsController]
})
export class OperationsModule {}
