import { Module } from '@nestjs/common';
import { PowensService } from "./powens.service";
import { PowensController } from "./powens.controller";

@Module({
  exports: [PowensService],
  providers: [PowensService],
  controllers: [PowensController]
})
export class PowensModule {}
