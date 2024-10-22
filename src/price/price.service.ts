import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs'; 
import { AxiosResponse } from 'axios'; 

@Injectable()
export class PriceService {
  constructor(private readonly httpService: HttpService) {}

  async fetchPrice(): Promise<any> { 
    const response: AxiosResponse<any> = await lastValueFrom(
      this.httpService.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd'), 
    );
    return response.data;
  }

  async getPrice(): Promise<any> {
    return this.fetchPrice();
  }
}
