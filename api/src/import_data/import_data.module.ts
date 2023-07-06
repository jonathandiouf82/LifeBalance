import { Module } from '@nestjs/common';
import { ImportDataService } from "./import_data.service";
import { ImportDataController } from "./import_data.controller";
import { OperationsModule } from "../operations/operations.module";
import { UserModule } from "../user/user.module";

@Module({
  imports: [OperationsModule,
            UserModule],
  exports: [ImportDataService],
  providers: [ImportDataService],
  controllers: [ImportDataController]
})
export class ImportDataModule {}
