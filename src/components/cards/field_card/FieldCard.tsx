import { useNavigate } from "react-router-dom";
import fieldImg from "../../../assets/field-placeholder.jpg";
import FieldCardDetails from "./FieldCardDetails";
import { FieldCardProps } from "./FieldCard.static";
import { FieldImage, StyledFieldCard } from "./FieldCard.styles";

export default function FieldCard({ field }: FieldCardProps) {

  const navigate = useNavigate();

  const handleFieldClick = () => {
    navigate(`/field/${field.id}`);
  };

  return (
    <StyledFieldCard onClick={handleFieldClick}>
      <FieldImage src={fieldImg} alt="Field"/>
      <FieldCardDetails field={field} />
    </StyledFieldCard>
  );
}
