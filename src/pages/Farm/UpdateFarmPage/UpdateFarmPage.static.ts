import { MutateOptions } from "react-query";
import { Farm } from "../../../static/types/types";

export interface UpdateFarmFunction {
    (
      variables: { farmId: string; updatedData: Partial<Farm> },
      options?:
        | MutateOptions<
            string,
            Error,
            { farmId: string; updatedData: Partial<Farm> },
            unknown
          >
        | undefined
    ): void;
    (arg0: { farmId: string; updatedData: Partial<Farm> }): void;
  }