// src/swap/swap.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { SwapService } from './swap.service';
import { InitiateSwapDto } from './initiate-swap.dto';

@Controller('swap')
export class SwapController {
  constructor(private readonly swapService: SwapService) {}

  @Get()
  getSwapInfo(): string {
    return 'This is the Swap endpoint!'; // Example response for GET /swap
  }

  @Post('initiate')
  initiateSwap(@Body() swapDto: InitiateSwapDto) {
    return this.swapService.initiateSwap(swapDto);
  }
}
