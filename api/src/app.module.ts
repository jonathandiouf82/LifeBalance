import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsController } from './operations/operations.controller';
import { ImportDataController } from './import_data/import_data.controller';

@Module({
  imports: [],
  controllers: [AppController, PaymentsController, ImportDataController],
  providers: [AppService],
})
export class AppModule {}
