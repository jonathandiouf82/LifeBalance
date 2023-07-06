import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImportDataModule } from './import_data/import_data.module';
import { OperationsModule } from './operations/operations.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from "@nestjs/config";
import { DataSource } from "typeorm";
import { DbModule } from "./db/db.module";

@Module({
  imports: [ConfigModule.forRoot(),
            DbModule,
            ImportDataModule,
            OperationsModule,
            UserModule,
            ImportDataModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
