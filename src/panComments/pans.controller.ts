import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { PansService } from './pans.service';
import { CreatePanDto } from './dto/create-pan.dto';

@Controller('pans')
export class PansController {
  constructor(private readonly pansService: PansService) {}

  @Post()
  create(@Body() createPanDto: CreatePanDto) {
    this.pansService.create(createPanDto);
    return {status: true}
  }
  @Post('/aadhaar')
  createPanWithAadhaar(@Body() createPanDto: CreatePanDto) {
    this.pansService.create(createPanDto);
    return {status: true}
  }

  @Get()
  list() {
    return this.pansService.findAll();
  }
  @Get('/aadhaar')
  findAll() {
    return this.pansService.findAll();
  }
}