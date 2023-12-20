import { Injectable } from '@nestjs/common';
import { Web3Adapter } from './web3-adapter';

@Injectable()
export class AppService {
  constructor(private readonly web3Adapter: Web3Adapter) {}

  async getBalance() {
    return await this.web3Adapter.balance();
  }

  async setTransfer(toWallet: string, value: number) {
    return await this.web3Adapter.transfer(toWallet, value);
  }
}
