var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MailerModule } from '@nestjs-modules/mailer';
import { PriceModule } from './price/price.module';
import { AlertModule } from './alert/alert.module';
import { SwapModule } from './swap/swap.module';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
const __dirname = process.cwd();
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            ScheduleModule.forRoot(),
            MailerModule.forRoot({
                transport: {
                    host: 'smtp.mailtrap.io', 
                    port: 2525, 
                    auth: {
                        user: 'danishghani9900@gmail.com', 
                        pass: '123456789', 
                    },
                },
                template: {
                    dir: join(__dirname, '../templates'),
                    adapter: new HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
            PriceModule,
            AlertModule,
            SwapModule,
        ],
    })
], AppModule);
export { AppModule };
