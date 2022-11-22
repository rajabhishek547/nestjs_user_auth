import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/mongoose/database.module';
import { Mobile, MobileSchema } from './mobilecomments/mobile.schema';
import { MobilesController } from './mobilecomments/mobiles.controller';
import { MobilesService } from './mobilecomments/mobiles.service';
import { Email, EmailSchema } from './emailcomments/email.schema';
import { EmailsController } from './emailcomments/emails.controller';
import { EmailsService } from './emailcomments/emails.service';
import { Bank, BankSchema } from './bankcomments/bank.schema';
import { BanksController } from './bankcomments/banks.controller';
import { BanksService } from './bankcomments/banks.service';
import { Pan, PanSchema } from './panComments/pan.schema';
import { PansController } from './panComments/pans.controller';
import { PansService } from './panComments/pans.service';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, 
    MongooseModule.forFeature([{ name: Mobile.name, schema: MobileSchema }]),
    MongooseModule.forFeature([{ name: Email.name, schema: EmailSchema }]),
    MongooseModule.forFeature([{ name: Bank.name, schema: BankSchema }]),
    MongooseModule.forFeature([{ name: Pan.name, schema: PanSchema }]),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController,MobilesController,EmailsController,BanksController,PansController],
  providers: [AppService,MobilesService,EmailsService,BanksService,PansService],
})
export class AppModule {}
