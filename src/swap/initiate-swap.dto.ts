import { IsNotEmpty, IsNumber } from 'class-validator';

export class InitiateSwapDto {
  @IsNotEmpty()
  fromCurrency!: string;

  @IsNotEmpty()
  toCurrency!: string;

  @IsNumber()
  amount!: number;
}
