import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { BanksService } from './banks.service';
import { CreateBankDto } from './dto/create-bank.dto';

@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @Post()
  create(@Body() createBankDto: CreateBankDto) {
    this.banksService.create(createBankDto);
    return {status: true}
  }

  @Get()
  list() {
    return this.banksService.findAll();
  }
}