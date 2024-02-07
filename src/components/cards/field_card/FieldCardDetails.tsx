import { FieldDetailsProps } from "./FieldCardDetails.static";
import { StyledFieldDetails } from "./FieldCardDetails.styles";
// import fieldIcon from "../../../assets/icons/field.png";
// import { CardIcon } from "../../../ui_elements/CommonStyledElements";

export default function FieldDetails({ field }: FieldDetailsProps) {
  return (
    <StyledFieldDetails>
      {/* <CardIcon src={fieldIcon} alt="Field Icon" /> */}
      <h3>{field.name}</h3>
    </StyledFieldDetails>
  );
}
