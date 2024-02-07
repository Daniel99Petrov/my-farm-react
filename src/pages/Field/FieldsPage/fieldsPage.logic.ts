import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field } from "../../../static/types/types";
import useFields from "../../../hooks/Field/UseFields";

export const useFieldsPageLogic = () => {
  const { fields } = useFields();
  const [filteredFields, setFilteredFields] = useState<Field[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);
  const title = `All Fields`;
  const searchPlaceholder = `Search field..`;
  const navigate = useNavigate();
  const handleCreateField = () => {
    navigate("/field-create");
  };

  useEffect(() => {
    if (fields) {
      setFilteredFields(fields);
      setIsLoading(false);
    }
  }, [fields]);

  const handleSearch = (query: string) => {
    const filtered = fields?.filter((field) =>
      field.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFields(filtered);
  };

  return {
    fields: filteredFields,
    isLoading,
    handleSearch,
    handleCreateField,
    title,
    searchPlaceholder,
  };
};
