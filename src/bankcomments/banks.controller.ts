import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { BanksService } from './banks.service';
import { CreateBankDto } from './dto/create-bank.dto';

@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createBankDto: CreateBankDto) {
    this.banksService.create(createBankDto);
    return {status: true}
  }
  @UseGuards(AuthGuard('jwt'))
  @Get()
  list() {
    return this.banksService.findAll();
  }
}