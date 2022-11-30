import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';

import { MobilesService } from './mobiles.service';
import { CreateMobileDto } from './dto/create-mobile.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('mobiles')
export class MobilesController {
  constructor(private readonly mobilesService: MobilesService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createMobileDto: CreateMobileDto) {
    this.mobilesService.create(createMobileDto);
    return {status: true}
  }
  @UseGuards(AuthGuard('jwt'))
  @Get()
  list() {
    return this.mobilesService.findAll();
  }
}