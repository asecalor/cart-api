import { IsNotEmpty, IsNumber } from "class-validator";

export class ProductOrder {
    @IsNumber()
    @IsNotEmpty()
    productId: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;
}