import { Module } from '@nestjs/common';
import { OperationsService } from "./operations.service";
import { OperationsController } from "./operations.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Operation } from "./operations.entity";
import { UserService } from "../user/user.service";
import { User } from "../user/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Operation, User])],
  exports: [OperationsService],
  providers: [OperationsService, UserService],
  controllers: [OperationsController]
})
export class OperationsModule {}
