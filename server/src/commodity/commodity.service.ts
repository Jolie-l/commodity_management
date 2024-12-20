import { Injectable } from '@nestjs/common';
import { CreateCommodityDto } from './dto/create-commodity.dto';
import { UpdateCommodityDto } from './dto/update-commodity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommodityService {
  constructor(private prisma: PrismaService) { }

  //创建商品
  create(createCommodityDto: CreateCommodityDto) {
    return this.prisma.commodity.create({
      data: createCommodityDto
    })
  }

  //查询所有商品
  findAll() {
    return this.prisma.commodity.findMany();
  }

  //查询单个商品
  findOne(id: number) {
    return this.prisma.commodity.findUnique({
      where:{id}
    })
  }

  //更新商品
  update(id: number, updateCommodityDto: UpdateCommodityDto) {
    return this.prisma.commodity.update({
      where:{id},
      data: updateCommodityDto
    })
  }

  //删除商品
  remove(id: number) {
    return this.prisma.commodity.delete({
      where:{id}
    })
  }
}
