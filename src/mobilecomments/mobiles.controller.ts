import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { MobilesService } from './mobiles.service';
import { CreateMobileDto } from './dto/create-mobile.dto';

@Controller('mobiles')
export class MobilesController {
  constructor(private readonly mobilesService: MobilesService) {}

  @Post()
  create(@Body() createMobileDto: CreateMobileDto) {
    this.mobilesService.create(createMobileDto);
    return {status: true}
  }

  @Get()
  list() {
    return this.mobilesService.findAll();
  }
}