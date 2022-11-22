import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pan, PanDocument } from './pan.schema';
import { CreatePanDto } from './dto/create-pan.dto';

@Injectable()
export class PansService {
  constructor(@InjectModel(Pan.name) private panModel: Model<PanDocument>) {}

  async create(createPanDto: CreatePanDto): Promise<Pan> {
    const createdPan = new this.panModel(createPanDto);
    return createdPan.save();
  }
  async createPanWithAadhaar(createPanDto: CreatePanDto): Promise<Pan> {
    const createdPan = new this.panModel(createPanDto);
    return createdPan.save();
  }

  async findAll(): Promise<Pan[]> {
    return this.panModel.find().exec();
  }
}