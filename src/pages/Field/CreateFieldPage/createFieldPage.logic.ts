import { useNavigate } from "react-router-dom";
import { createField } from "../../../services/fieldService";
import { routes } from "../../../static/routes/routes";
import { CreateFieldFormData } from "./createFieldPage.static";

export const useCreateFieldPageLogic = () => {
  const navigate = useNavigate();
  const title = "Fill in the info to create a new field";
  const handleCreateField = async (formData: CreateFieldFormData) => {
    try {
      const parsedCoordinates = JSON.parse(formData.coordinates);
      const createdField = await createField(
        formData.name,
        { type: "Polygon", coordinates: parsedCoordinates },
        formData.farmId,
        formData.soilId
      );
      const fieldId = createdField.id;
      navigate(routes.fieldDetails.replace(":fieldId", fieldId));
    } catch (error) {
      console.error(error);
    }
  };

  return { title, handleCreateField };
};
