import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationsModule } from './crud/operations/operations.module';
import { UsersModule } from './crud/users/users.module';
import { ConfigModule } from "@nestjs/config";
import { DataSource } from "typeorm";
import { DbModule } from "./db/db.module";
import { PowensService } from './services/powens/powens.service';
import { PowensModule } from "./services/powens/powens.module";
import { AccountsService } from './crud/accounts/accounts.service';
import { AccountsController } from './crud/accounts/accounts.controller';
import { AccountsModule } from './crud/accounts/accounts.module';
import { CategoriesService } from './crud/categories/categories.service';
import { CategoriesController } from './crud/categories/categories.controller';
import { CategoriesModule } from './crud/categories/categories.module';
import { GoalsService } from './crud/goals/goals.service';
import { GoalsController } from './crud/goals/goals.controller';
import { GoalsModule } from './crud/goals/goals.module';
import { TasksService } from './crud/tasks/tasks.service';
import { TasksController } from './crud/tasks/tasks.controller';
import { TasksModule } from './crud/tasks/tasks.module';
import { EventsController } from './crud/events/events.controller';
import { EventsService } from './crud/events/events.service';
import { EventsModule } from './crud/events/events.module';

@Module({
  imports: [ConfigModule.forRoot(),
            DbModule,
            OperationsModule,
            UsersModule,
            PowensModule,
            AccountsModule,
            CategoriesModule,
            GoalsModule,
            TasksModule,
            EventsModule],
  providers: [AppService, AccountsService, CategoriesService, GoalsService, TasksService, EventsService, PowensService],
  controllers: [AppController, AccountsController, CategoriesController, GoalsController, TasksController, EventsController],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
