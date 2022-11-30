import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';

import { EmailsService } from './emails.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('emails')
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createEmailDto: CreateEmailDto) {
    this.emailsService.create(createEmailDto);
    return {status: true}
  }
  @UseGuards(AuthGuard('jwt'))
  @Get()
  list() {
    return this.emailsService.findAll();
  }
}