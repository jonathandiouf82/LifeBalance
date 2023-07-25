import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "../crud/users/user.entity";
import { Operation } from "../crud/operations/operations.entity";
import { DataSource } from "typeorm";
import {Account} from "../crud/accounts/account.entity";
import {Task} from "../crud/tasks/task.entity";
import {Goal} from "../crud/goals/goal.entity";
import {TaskEvent} from "../crud/events/event.entity";
import {Category} from "../crud/categories/category.entity";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST_URL'),
        port: 3306,
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PW'),
        database: configService.get<string>('DB'),
        entities: [
          User,
          Operation,
          Account,
          Task,
          TaskEvent,
          Goal,
          Category
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    })
  ]

})

export class DbModule {
  constructor(private dataSource: DataSource){}
}
