import { Module } from '@nestjs/common';
import { DepenseService } from './depenses.service';
import { DepensesController } from './depenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depense } from './depense.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Depense])],
  providers: [DepenseService],
  controllers: [DepensesController],
  exports: [DepenseService],
})
export class DepensesModule {}
