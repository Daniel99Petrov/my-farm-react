import { MachineCardProps } from "./machineCard.static";
import { StyledMachineDetails } from "./machineCard.style";

export default function MachineDetails({ machine }: MachineCardProps) {
    return (
      <StyledMachineDetails>
        {/* <CardIcon src={fieldIcon} alt="Field Icon" /> */}
        <h3>{machine.registrationNumber}</h3>
      </StyledMachineDetails>
    );
  }