import { ApiProperty } from "@nestjs/swagger";

// DTO for creating a new commodity

export class CreateCommodityDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    price: number;

    @ApiProperty({ required: false })
    description?: string;

    @ApiProperty()
    number: number;

}

