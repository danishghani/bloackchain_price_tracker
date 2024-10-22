var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer'; 
let AlertService = class AlertService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendAlertEmail(chain, price, email) {
        const message = `The price of ${chain} has reached ${price} USD.`;
     
        await this.mailerService.sendMail({
            to: email,
            subject: `${chain} Price Alert`,
            text: message,
        });
    }
};
AlertService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MailerService])
], AlertService);
export { AlertService };
