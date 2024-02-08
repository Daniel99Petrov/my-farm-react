export interface CreateProcessingFormProps {
    onSubmit: (formData: {
      processingTypeId: string;
      machineId: string;
      date: Date;
    }) => void;
  }