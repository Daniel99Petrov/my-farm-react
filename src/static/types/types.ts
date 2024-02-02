export interface Processing {
  id: string;
  growingPeriodId: string;
  processingTypeId: string;
  machineId: string;
  date: Date;
  created: Date;
  updated: Date;
  deleted: Date;
}

export interface ProcessingType {
  id: string;
  name: string;
  created: Date;
  updated: Date;
  deleted: Date;
}

export interface Machine {
  id: string;
  brand: string;
  model: string;
  registrationNumber: string;
  farmId: string;
  created: Date;
  updated: Date;
  deleted: Date;
}

export type BorderType = "Polygon";
export type FieldCoordinatesType = number[][][];
export type FieldBordersType = {
  type: BorderType;
  coordinates: FieldCoordinatesType;
};

export interface Field {
  id: string;
  name: string;
  farmId: string;
  soilId: string;
  borders: FieldBordersType;
  created: Date;
  updated: Date;
  deleted: Date;
}

export interface Farm {
  id: string;
  name: string;
  location: { type: string; coordinates: number[] };
  created: Date;
  updated: Date;
  deleted: Date;
}

export interface GrowingPeriod {
  id: string;
  fieldId: string;
  cropId: string;
  created: Date;
  updated: Date;
  deleted: Date;
}
export interface Crop {
  id: string;
  name: string;
  created: Date;
  updated: Date;
  deleted: Date;
}
export interface Soil {
  id: string;
  name: string;
  created: Date;
  updated: Date;
  deleted: Date;
}
