import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {  FilterQuery, Model, Types, UpdateQuery } from "mongoose";
import { CreateEquipementDto } from "./database/dtos/create-equipement.dto";
import { Equipement, EquipementDocument } from "./database/schemas/equipement.schema";

@Injectable()
 export class EquipementService {
    constructor(@InjectModel(Equipement.name) protected readonly EquipementModel : Model<EquipementDocument>) {}

    async create (createEquipementDto : CreateEquipementDto) : Promise<Equipement>{
        const createdEquipement = new this.EquipementModel({
            _id: new Types.ObjectId(),
            ...createEquipementDto
        });
        return createdEquipement.save();
    }

    async find() : Promise<Equipement[]> {
        const query = this.EquipementModel.find().select('-location -dashboardPriotiy -placement -equipNumber -device');
        return query.exec();
    }

    async findOne(entityFilterQuery : FilterQuery<EquipementDocument>) : Promise<Equipement>{
        return this.EquipementModel.findById(entityFilterQuery).exec();
    }

    async findOneAndUpdate (entityFilterQuery : FilterQuery<EquipementDocument>, updatedEquipement : UpdateQuery<EquipementDocument>) : Promise<Equipement>{
        return this.EquipementModel.findOneAndUpdate(
            entityFilterQuery, 
            updatedEquipement, {new : true}
        ).exec();
    }

    async delete(entityFilterQuery : FilterQuery<EquipementDocument>) : Promise<Equipement>{
        return this.EquipementModel.findByIdAndRemove(entityFilterQuery)
    }
}
