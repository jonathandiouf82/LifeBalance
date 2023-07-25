import { Module } from '@nestjs/common';
import { OperationsService } from "./operations.service";
import { OperationsController } from "./operations.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Operation } from "./operations.entity";
import { AccountsService } from "../accounts/accounts.service";
import { Account } from "../accounts/account.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Operation, Account])],
  exports: [OperationsService],
  providers: [OperationsService, AccountsService],
  controllers: [OperationsController]
})
export class OperationsModule {}
