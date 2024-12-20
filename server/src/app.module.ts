import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CommodityModule } from './commodity/commodity.module';

@Module({
  imports: [PrismaModule, CommodityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
