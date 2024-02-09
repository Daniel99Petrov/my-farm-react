import { Field } from "../../../../static/types/types";

export interface UpdateFieldFormProps {
    field: Field;
    onSubmit: (updatedData: Partial<Field>) => void;
  }
  export interface SubmittedFormData {
    name?: string;
    coordinates?: string;
    farmId?: string;
    soilId?: string;
    borders?: {
      type: string;
      coordinates: string;
    };
  }