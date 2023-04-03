import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export type EquipementDocument = Equipement & Document;

@Schema()
export class Equipement {
    @Prop({ type: SchemaTypes.ObjectId })
    _id: Types.ObjectId;
   
    @Prop()
    name: String;

    @Prop()
    category: String;

    @Prop()
    device: string;

    @Prop()
    company: string;

    @Prop()
    equipNumber: number;

    @Prop()
    placement: string;

    @Prop()
    dashboardPriotiy: number;

    @Prop()
    location: string;

    @Prop({
      type: {
        offline: Number,
        idle: Number,
        uptime: Number,
        maxDemand: Number,
        runTimeTarget: Number,
      },
    })
    thresholds: Record<string, number> | null;

};

export const EquipementSchema = SchemaFactory.createForClass(Equipement);
