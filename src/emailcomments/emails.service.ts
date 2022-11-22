import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Email, EmailDocument } from './email.schema';
import { CreateEmailDto } from './dto/create-email.dto';

@Injectable()
export class EmailsService {
  constructor(@InjectModel(Email.name) private emailModel: Model<EmailDocument>) {}

  async create(createEmailDto: CreateEmailDto): Promise<Email> {
    const createdEmail = new this.emailModel(createEmailDto);
    return createdEmail.save();
  }

  async findAll(): Promise<Email[]> {
    return this.emailModel.find().exec();
  }
}