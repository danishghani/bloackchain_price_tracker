import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

// Define an interface for alerts
interface Alert {
  id: number;
  chain: string;
  price: number;
  email: string;
}

@Injectable()
export class AlertService {
  private alerts: Alert[] = [];
  private currentId = 1; // Simple ID generator

  constructor(private readonly mailerService: MailerService) {}

  // Create and store a new alert
  createAlert(chain: string, price: number, email: string): Alert {
    const newAlert: Alert = {
      id: this.currentId++,
      chain,
      price,
      email,
    };
    this.alerts.push(newAlert);
    return newAlert;
  }

  // Fetch all alerts
  getAlerts(): Alert[] {
    return this.alerts;
  }

  // Send alert email
  async sendAlertEmail(chain: string, price: number, email: string): Promise<void> {
    const message = `The price of ${chain} has reached ${price} USD.`;

    await this.mailerService.sendMail({
      to: email,
      subject: `${chain} Price Alert`,
      text: message,
    });
  }
}
