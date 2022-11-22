import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { EmailsService } from './emails.service';
import { CreateEmailDto } from './dto/create-email.dto';

@Controller('emails')
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @Post()
  create(@Body() createEmailDto: CreateEmailDto) {
    this.emailsService.create(createEmailDto);
    return {status: true}
  }

  @Get()
  list() {
    return this.emailsService.findAll();
  }
}