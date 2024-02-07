export interface CreateGrowingPeriodFormProps {
  onSubmit: (formData: {
    cropId: string;
    machineId: string;
    processingTypeId: string;
    date: Date
  }) => void;
}
