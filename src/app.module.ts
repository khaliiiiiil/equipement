import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipementController } from './app.controller';
import { EquipementService } from './app.service';
import { Equipement, EquipementSchema } from './database/schemas/equipement.schema';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://k14512415:khalil1451@cluster0.qej0gup.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Equipement.name, schema: EquipementSchema }]),
  ],
  controllers: [EquipementController],
  providers: [EquipementService],
})
export class EquipementModule {}