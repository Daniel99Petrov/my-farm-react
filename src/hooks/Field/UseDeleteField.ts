import { useMutation } from "react-query";
import { BASE_URL } from "../../static/constants/constants";
import { apiEndpoints } from "../../static/routes/apiEndpoints";
import useFields from "./UseFields";

const deleteFieldEndpoint = apiEndpoints.deleteField;
const useDeleteField = () => {
  const { refetch } = useFields();
  const deleteFieldMutation = useMutation(deleteField);
  

  async function deleteField(fieldId: string) {
    try {
        console.log("Deleting field with ID:", fieldId);
      const response = await fetch(
        `${BASE_URL}${deleteFieldEndpoint.replace(":fieldId", fieldId)}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage =
          errorData?.error?.message || "Unknown error occurred";
        console.error(`Failed to delete field: `, errorMessage);
        throw new Error(`Failed to delete field: ${errorMessage}`);
      }

      refetch();
    } catch (error) {
      console.error(`Failed to delete field: `, error);
    }
  }
  return {
    deleteField: deleteFieldMutation.mutate,
  };
};

export default useDeleteField;