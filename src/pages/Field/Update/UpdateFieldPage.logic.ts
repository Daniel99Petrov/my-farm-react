import { useParams } from "react-router-dom";
import useUpdateField from "../../../hooks/Field/UseUpdateFiled";
import { useEffect, useState } from "react";
import { Field } from "../../../static/types/types";
import { fetchFieldDetails } from "../../../services/fieldService";
import { UpdateFieldFormData } from "./UpdateFieldPage.static";

export const useUpdateFieldPageLogic = () => {
  const { fieldId } = useParams();
  const { updateField } = useUpdateField();
  const [field, setField] = useState<Field | null>(null);
  const title = "Update Field";
  useEffect(() => {
    const fetchField = async () => {
      try {
        const fieldData = await fetchFieldDetails(fieldId);
        setField(fieldData);
      } catch (error) {
        console.error("Error fetching field details:", error);
      }
    };

    fetchField();
  }, [fieldId]);

  const handleSubmit = async (formData: UpdateFieldFormData) => {
    try {
      if (fieldId) {
        updateField({ fieldId, updatedData: formData });
      } else {
        throw new Error("No field Id provided");
      }
    } catch (error) {
      console.error("Error updating field:", error);
    }
  };

  return { field, title, handleSubmit };
};
