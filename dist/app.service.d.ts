import { Web3Adapter } from './web3-adapter';
export declare class AppService {
    private readonly web3Adapter;
    constructor(web3Adapter: Web3Adapter);
    getBalance(): Promise<string>;
    setTransfer(toWallet: string, value: number): Promise<import("web3-types").Bytes>;
}
