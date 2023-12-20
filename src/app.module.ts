import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Web3 from 'web3';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { Web3Adapter } from './web3-adapter';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] })],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'Web3',
      useFactory: () => {
        return new Web3(configuration().network_url);
      },
    },
    Web3Adapter,
  ],
})
export class AppModule {}
