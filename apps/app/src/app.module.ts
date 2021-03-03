import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibaModule } from '@app/liba';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ormConfig,
    }),
    LibaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
