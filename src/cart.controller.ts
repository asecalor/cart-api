import { Body, Controller, Post } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { CreateOrderDTO } from "./order.input";

@Controller('cart')
export class CartController {
  constructor(private readonly httpService: HttpService) {}

  @Post()
  async addProductToCart(@Body() createOrderDTO: CreateOrderDTO) {
    const response=await firstValueFrom(
      this.httpService
        .post('http://control-tower-api:3000/order',createOrderDTO))
    return response.data;
  }
}
