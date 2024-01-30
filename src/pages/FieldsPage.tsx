import { useEffect, useState } from "react";
import styled from "styled-components";
import fieldImg from "../assets/field-placeholder.jpg";
import { Field } from "../types/types";
import { fetchFields } from "../services/fieldService";

const FieldCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const FieldDetails = styled.div`
  padding: 16px;
  text-align: center;
`;

const FieldImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
`;

export default function FieldsPage() {
  const [fields, setFields] = useState<Field[]>([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fieldsData = await fetchFields();
        setFields(fieldsData);
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Fields Page</h2>
      {fields.map((field) => (
        <FieldCard key={field.id}>
          <FieldImage src={fieldImg} alt="Field placeholder image" />
          <FieldDetails>
            <h3>{field.name}</h3>
          </FieldDetails>
        </FieldCard>
      ))}
    </div>
  );
}
