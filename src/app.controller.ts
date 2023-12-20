import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SetTransfer } from './set-transfer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/balance')
  getBalance() {
    return this.appService.getBalance();
  }

  @Post('/balance')
  setTransfer(@Body() input: SetTransfer) {
    return this.appService.setTransfer(input.toWallet, input.value);
  }
}
