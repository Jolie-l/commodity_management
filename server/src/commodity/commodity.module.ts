import { Module } from '@nestjs/common';
import { CommodityService } from './commodity.service';
import { CommodityController } from './commodity.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CommodityController],
  providers: [CommodityService],
  imports: [PrismaModule],
})
export class CommodityModule {}
