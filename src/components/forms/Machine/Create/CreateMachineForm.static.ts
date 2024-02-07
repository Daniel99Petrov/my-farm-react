export interface CreateMachineFormProps {
    onSubmit: (formData: {
      registrationNumber: string;
      brand: string;
      model: string;
      farmId: string;
    }) => void;
  }