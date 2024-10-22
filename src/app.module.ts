import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MailerModule } from '@nestjs-modules/mailer';
import { PriceModule } from './price/price.module';
import { AlertModule } from './alert/alert.module';
import { SwapModule } from './swap/swap.module';
import { join } from 'path'; 
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { AppController } from './app.controller';

@Module({
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
        dir: join(process.cwd(), 'templates'),
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
  controllers: [AppController],
})
export class AppModule {}
