export interface CreateProcessingFormProps {
    onSubmit: (formData: {
      growingPeriodId: string;
      processingTypeId: string;
      machineId: string;
      date: Date;
    }) => void;
  }