import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Field } from "../../../static/types/types";
import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import fieldIcon from "../../../assets/icons/field.png";
import useUpdateField from "../../../hooks/Field/UseUpdateFiled";
import { fetchFieldDetails } from "../../../services/fieldService";
import UpdateFieldForm from "../../../components/forms/Field/Update/UpdateFieldForm";

export default function UpdateFieldPage() {
  const title = "Update Field";
  const { fieldId } = useParams();
  const { updateField } = useUpdateField();
  const [field, setField] = useState(null);

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

  const handleSubmit = async (formData: Partial<Field>) => {
    try {
      if (fieldId) {
        updateField({ fieldId, updatedData: formData });
      } else throw new Error("No field Id provided");
    } catch (error) {
      console.error("Error updating field:", error);
    }
  };

  return (
    <div>
      <PageTitle>
        <TitleImage src={fieldIcon} alt="Field Icon" />
        {title}
      </PageTitle>
      {field && <UpdateFieldForm field={field} onSubmit={handleSubmit} />}
    </div>
  );
}
