import Web3 from 'web3';
export declare class Web3Adapter {
    private readonly web3;
    constructor(web3: Web3);
    balance(): Promise<string>;
    transfer(toWallet: string, value: number): Promise<import("web3").Bytes>;
}
