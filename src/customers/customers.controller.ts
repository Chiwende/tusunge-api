import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Customers } from 'src/entities/Customers.entity';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
    constructor (
        private readonly customerService: CustomersService
    ) {}
    @Post('register')
    registerCustomer(@Body() payload: Customers){
        return this.customerService.registerCustomer(payload)
    }

    @Get("/:msisdn")
    getCustomerDetails(@Param("msisdn") msisdn: any){
        return this.customerService.getCustomerDetails(msisdn)
    }

}
