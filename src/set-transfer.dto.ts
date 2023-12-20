import { ApiProperty } from '@nestjs/swagger';

export class SetTransfer {
  @ApiProperty({ type: String })
  toWallet: string;

  @ApiProperty({ type: Number })
  value: number;
}
