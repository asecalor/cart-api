import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [CartController],
  providers: [],
})
export class AppModule {}
