export interface FieldDetailsInterface {
  coordinates: number[][][];

  soilName: string | undefined;
  farmName: string | undefined;
}

export const fieldDetailButtons = {
  update: "Update Field Info",
  delete: "Delete Field",
  createPeriod: "Create Growing Period",
  createProcessing: "Add new processing",
}
