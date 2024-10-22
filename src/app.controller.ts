import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome(): string {
    return `
      <h1>Welcome to the Blockchain Price Tracker!</h1>
      <h2>Available Endpoints:</h2>
      <ul>
        <li><a href="/price">View Prices</a></li>
        <li><a href="/swap">Initiate Swap</a></li>
        <li><a href="/alert">Set Alerts</a></li>
      </ul>
    `;
  }
}
