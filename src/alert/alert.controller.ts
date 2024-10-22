import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlertService } from './alert.service';

@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

 
  @Post()
  createAlert(@Body() alertDto: { chain: string; price: number; email: string }) {
    return this.alertService.createAlert(alertDto.chain, alertDto.price, alertDto.email);
  }


  @Get()
  getAlerts() {
    return this.alertService.getAlerts();
  }
}
