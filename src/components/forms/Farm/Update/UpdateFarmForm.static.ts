import { Farm } from "../../../../static/types/types";

export interface UpdateFarmFormProps {
    farm: Farm;
    onSubmit: (updatedData: Partial<Farm>) => void;
  }