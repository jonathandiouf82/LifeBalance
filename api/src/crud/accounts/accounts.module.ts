import { Module } from '@nestjs/common';
import { AccountsService } from "./accounts.service";
import { AccountsController } from "./accounts.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "./account.entity";
import {User} from "../users/user.entity";
import {UsersService} from "../users/users.service";

@Module({
    imports: [TypeOrmModule.forFeature([Account, User])],
    exports: [AccountsService, TypeOrmModule.forFeature([Account, User])],
    providers: [AccountsService, UsersService],
    controllers: [AccountsController]
})
export class AccountsModule {}

