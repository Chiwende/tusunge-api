import { Body, Controller, Post } from '@nestjs/common';
import { PayService } from './pay.service';

@Controller('pay')
export class PayController {
    constructor (
        private readonly payService: PayService
    ) {}

    // @Post()
    // makePaymentRequest(@Body() payload)
}
