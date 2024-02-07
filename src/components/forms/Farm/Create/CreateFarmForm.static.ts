export interface CreateFarmFormProps {
  onSubmit: (formData: {
    name: string;
    latitude: string;
    longitude: string;
  }) => void;
}