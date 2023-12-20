"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3Adapter = void 0;
const common_1 = require("@nestjs/common");
const web3_1 = require("web3");
const configuration_1 = require("./config/configuration");
let Web3Adapter = class Web3Adapter {
    constructor(web3) {
        this.web3 = web3;
    }
    async balance() {
        const balance = await this.web3.eth.getBalance((0, configuration_1.default)().wallet);
        return this.web3.utils.fromWei(balance, 'ether');
    }
    async transfer(toWallet, value) {
        const nonce = await this.web3.eth.getTransactionCount((0, configuration_1.default)().wallet, 'latest');
        const transaction = {
            to: toWallet,
            value,
            gas: 21000,
            nonce,
            gasPrice: await this.web3.eth.getGasPrice(),
        };
        const signedTX = await this.web3.eth.accounts.signTransaction(transaction, (0, configuration_1.default)().private_key);
        const tx = await this.web3.eth.sendSignedTransaction(signedTX.rawTransaction);
        return tx.transactionHash;
    }
};
exports.Web3Adapter = Web3Adapter;
exports.Web3Adapter = Web3Adapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('Web3')),
    __metadata("design:paramtypes", [web3_1.default])
], Web3Adapter);
//# sourceMappingURL=web3-adapter.js.map