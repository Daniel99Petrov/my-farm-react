import { useEffect, useState } from "react";
import { fetchFieldDetails } from "../../../services/fieldService";

const GrowingPeriodOptionInput = ({ options, label, onSelect, ...props }) => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    // Fetch fields based on fieldIds in options
    const fetchFields = async () => {
      const fetchedFields = await Promise.all(
        options.map(async (option) => {
          // Assuming you have a function fetchFieldById to fetch a field by its id
          const field = await fetchFieldDetails(option.fieldId);
          return field;
        })
      );
      setFields(fetchedFields);
    };

    fetchFields();
  }, [options]);

  const getFieldById = (fieldId) => {
    return fields.find((field) => field.id === fieldId);
  };
  const handleSelectChange = (event) => {
    const selectedOptionId = event.target.value;
    onSelect(selectedOptionId);
  };
  return (
    <div>
      <label>{label}</label>
      <select onChange={handleSelectChange} {...props}>
        <option value="" disabled selected>
          {`Choose ${label}`}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {getFieldById(option.fieldId)?.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GrowingPeriodOptionInput;
