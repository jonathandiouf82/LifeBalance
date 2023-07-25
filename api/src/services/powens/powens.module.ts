import { Module } from '@nestjs/common';
import { PowensService } from "./powens.service";

@Module({
  exports: [PowensService],
  providers: [PowensService]
})
export class PowensModule {}
