import { AppService } from './app.service';
import { SetTransfer } from './set-transfer.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getBalance(): Promise<string>;
    setTransfer(input: SetTransfer): Promise<import("web3-types").Bytes>;
}
