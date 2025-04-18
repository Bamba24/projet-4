import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepensesModule } from './depenses/depenses.module';
import { RevenusModule } from './revenus/revenus.module';
import { Revenu } from './revenus/revenus.entity';
import { Depense } from './depenses/depense.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql25',
      database: 'blog',
      entities: [ Revenu, Depense],   
      synchronize: true,
    }),
    DepensesModule,
    RevenusModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
