import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Types, UpdateQuery } from 'mongoose';
import { EquipementService } from './app.service';
import { Equipement, EquipementDocument } from './database/schemas/equipement.schema';
import {CreateEquipementDto} from './database/dtos/create-equipement.dto'
import { Delete } from '@nestjs/common/decorators';


@Controller('Equipements')
export class EquipementController {
  constructor(private readonly EquipementService: EquipementService) {}

  @Post()
  async creatEquipement(@Body() createEquipementDto : CreateEquipementDto) : Promise<Equipement>{
      return this.EquipementService.create(createEquipementDto)
  }

  @Get()
  async getEquipements() : Promise<Equipement[]>{
      return this.EquipementService.find();
  }

  @Get(':id')
  async getEquipement(@Param('id') id : Types.ObjectId) : Promise<Equipement>{
      return this.EquipementService.findOne(id);
  }

  @Patch(':id')
  async updateEquipement(@Param('id') id : Types.ObjectId, @Body() update : UpdateQuery<EquipementDocument>) : Promise<Equipement>{
      return this.EquipementService.findOneAndUpdate(id , update);
  }

  @Delete(':id')
  async deleteEquipement(@Param('id') id : Types.ObjectId) : Promise<Equipement>{
    return this.EquipementService.delete(id);
  }
}


