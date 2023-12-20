import { Inject, Injectable } from '@nestjs/common';
import Web3 from 'web3';
import configuration from './config/configuration';

@Injectable()
export class Web3Adapter {
  constructor(
    @Inject('Web3')
    private readonly web3: Web3,
  ) {}

  async balance() {
    const balance = await this.web3.eth.getBalance(configuration().wallet);
    return this.web3.utils.fromWei(balance, 'ether');
  }

  async transfer(toWallet: string, value: number) {
    const nonce = await this.web3.eth.getTransactionCount(
      configuration().wallet,
      'latest',
    );

    const transaction = {
      to: toWallet,
      value,
      gas: 21000,
      nonce,
      gasPrice: await this.web3.eth.getGasPrice(),
    };

    const signedTX = await this.web3.eth.accounts.signTransaction(
      transaction,
      configuration().private_key,
    );

    const tx = await this.web3.eth.sendSignedTransaction(
      signedTX.rawTransaction,
    );

    return tx.transactionHash;
  }
}
