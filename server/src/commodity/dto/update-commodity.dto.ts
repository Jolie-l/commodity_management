import { PartialType } from '@nestjs/swagger';
import { CreateCommodityDto } from './create-commodity.dto';

//DTO for updating a new commodity

export class UpdateCommodityDto extends PartialType(CreateCommodityDto) {}
