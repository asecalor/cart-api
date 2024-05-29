import { IsNotEmpty, IsNumber } from "class-validator";
import { ProductOrder } from "./product.input";

export class CreateOrderDTO {
    @IsNotEmpty()
    @IsNumber()
    clientId: number;

    @IsNotEmpty()
    @IsNumber()
    providerId: number;

    @IsNotEmpty()
    products: ProductOrder[];
}
