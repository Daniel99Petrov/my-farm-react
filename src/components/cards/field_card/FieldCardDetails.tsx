import { FieldDetailsProps } from "./fieldCardDetails.static";
import { StyledFieldDetails } from "./fieldCardDetails.styles";
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
