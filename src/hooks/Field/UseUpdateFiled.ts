import { useNavigate } from "react-router-dom";
import { apiEndpoints } from "../../static/routes/apiEndpoints";
import { useMutation } from "react-query";
import { Field } from "../../static/types/types";
import { BASE_URL } from "../../static/constants/constants";
import useFields from "./UseFields";

const updateFieldEndpoint = apiEndpoints.updateField;

const useUpdateField = () => {
  const { refetch } = useFields(); 
const navigate = useNavigate();
const updateFieldMutation = useMutation<string, Error, { fieldId: string ; updatedData: Partial<Field> }>(
    async ({ fieldId, updatedData }) => {
      try {
        console.log("Updating field with ID:", fieldId);
        const response = await fetch(
          `${BASE_URL}${updateFieldEndpoint.replace(":fieldId", fieldId)}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          const errorMessage =
            errorData?.error?.message || "Unknown error occurred";
          console.error(`Failed to update field: `, errorMessage);
          throw new Error(`Failed to update field: ${errorMessage}`);
        }

        refetch(); 
        return fieldId;
      } catch (error) {
        console.error(`Failed to update field: `, error);
        throw error;
      }
    },
    {
      onSuccess: (data) => {
        navigate(`/field/${data}`);
      },
    }
  );

  return {
    updateField: updateFieldMutation.mutate,
  };
};

export default useUpdateField;