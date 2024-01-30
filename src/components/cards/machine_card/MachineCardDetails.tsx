import { StyledFieldDetails } from "../field_card/fieldCardDetails.styles";
import { MachineCardProps } from "./machineCard.static";

export default function MachineDetails({ machine }: MachineCardProps) {
    return (
      <StyledFieldDetails>
        {/* <CardIcon src={fieldIcon} alt="Field Icon" /> */}
        <h3>{machine.registrationNumber}</h3>
      </StyledFieldDetails>
    );
  }