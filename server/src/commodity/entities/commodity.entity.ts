import { Commodity } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

//商品实体
export class CommodityEntity implements Commodity {

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    price: number;

    @ApiProperty({ required: false, nullable: true })
    description: string;

    @ApiProperty()
    number: number;

    @ApiProperty()
    createdAt: Date;
    
    @ApiProperty()
    updatedAt: Date;
}
