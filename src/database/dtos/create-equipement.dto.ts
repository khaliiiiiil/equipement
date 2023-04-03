export class CreateEquipementDto{
    name: String;

    company: string;

    category: String;

    device: string;

    equipNumber: number;

    placement: string;

    dashboardPriotiy: number;

    location: string;

    thresholds: {
      offline: Number,
      idle: Number,
      uptime: Number,
      maxDemand: Number,
      runTimeTarget: Number
    };

}

