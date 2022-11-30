import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';

import { PansService } from './pans.service';
import { CreatePanDto } from './dto/create-pan.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('pans')
export class PansController {
  constructor(private readonly pansService: PansService) {}
  @UseGuards(AuthGuard('jwt'))
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
  @UseGuards(AuthGuard('jwt'))
  @Get()
  list() {
    return this.pansService.findAll();
  }
  @Get('/aadhaar')
  findAll() {
    return this.pansService.findAll();
  }
}