import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mobile, MobileDocument } from './mobile.schema';
import { CreateMobileDto } from './dto/create-mobile.dto';

@Injectable()
export class MobilesService {
  constructor(@InjectModel(Mobile.name) private mobileModel: Model<MobileDocument>) {}

  async create(createMobileDto: CreateMobileDto): Promise<Mobile> {
    const createdMobile = new this.mobileModel(createMobileDto);
    return createdMobile.save();
  }

  async findAll(): Promise<Mobile[]> {
    return this.mobileModel.find().exec();
  }
}