export interface CreateFieldFormProps {
    onSubmit: (formData: {
      name: string;
      coordinates: string;
      farmId: string;
      soilId: string;
    }) => void;
  }