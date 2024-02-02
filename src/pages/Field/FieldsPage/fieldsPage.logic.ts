import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field } from "../../../static/types/types";
import { fetchFields } from "../../../services/fieldService";

export const useFieldsPageLogic = () => {
  const [fields, setFields] = useState<Field[]>([]);
  const [filteredFields, setFilteredFields] = useState<Field[]>([]);
  const title = `All Fields`;
  const searchPlaceholder = `Search field..`;
  const navigate = useNavigate();
  const handleCreateField = () => {
    navigate("/field-create");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fieldsData = await fetchFields();
        setFields(fieldsData);
        setFilteredFields(fieldsData);
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = fields.filter((field) =>
      field.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFields(filtered);
  };

  return {
    fields: filteredFields,
    handleSearch,
    handleCreateField,
    title,
    searchPlaceholder,
  };
};
