import { Module } from '@nestjs/common';
import { RevenuService } from './revenus.service';
import { RevenusController } from './revenus.controller';
import { Revenu } from './revenus.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Revenu])],
  providers: [RevenuService],
  controllers: [RevenusController],
  exports: [RevenuService],
})
export class RevenusModule {}
