import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bank, BankDocument } from './bank.schema';
import { CreateBankDto } from './dto/create-bank.dto';

@Injectable()
export class BanksService {
  constructor(@InjectModel(Bank.name) private bankModel: Model<BankDocument>) {}

  async create(createBankDto: CreateBankDto): Promise<Bank> {
    const createdBank = new this.bankModel(createBankDto);
    return createdBank.save();
  }

  async findAll(): Promise<Bank[]> {
    return this.bankModel.find().exec();
  }
}