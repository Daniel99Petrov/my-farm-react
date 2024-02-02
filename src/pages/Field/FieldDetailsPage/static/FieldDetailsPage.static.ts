import { BorderType } from "../../../../static/types/types";

export interface FieldDetailsInterface {
  borders: {
    type: BorderType;
    coordinates: number[][][];
  };
  soilName: string | undefined;
  farmName: string | undefined;
}
