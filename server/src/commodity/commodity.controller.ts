import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommodityService } from './commodity.service';
import { CreateCommodityDto } from './dto/create-commodity.dto';
import { UpdateCommodityDto } from './dto/update-commodity.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CommodityEntity } from './entities/commodity.entity';


@ApiTags('commodity')
@Controller('commodity')
export class CommodityController {
  constructor(private readonly commodityService: CommodityService) { }

  @Post()
  @ApiCreatedResponse({ type: CommodityEntity })   // return type of the created entity
  create(@Body() createCommodityDto: CreateCommodityDto) {
    return this.commodityService.create(createCommodityDto);
  }

  @Get()
  @ApiOkResponse({ type: CommodityEntity, isArray: true })  // return type of the array of entities
  findAll() {
    return this.commodityService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CommodityEntity })  // return type of the entity
  findOne(@Param('id') id: string) {
    return this.commodityService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CommodityEntity })  // return type of the  entity
  update(@Param('id') id: string, @Body() updateCommodityDto: UpdateCommodityDto) {
    return this.commodityService.update(+id, updateCommodityDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CommodityEntity }) // return type of the  entity
  remove(@Param('id') id: string) {
    return this.commodityService.remove(+id);
  }
}
