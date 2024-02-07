import { MachineCardProps } from "./MachineCard.static";
import { StyledMachineDetails } from "./MachineCard.style";

export default function MachineDetails({ machine }: MachineCardProps) {
  return (
    <StyledMachineDetails>
      {/* <CardIcon src={fieldIcon} alt="Field Icon" /> */}
      <h3>{machine.registrationNumber}</h3>
    </StyledMachineDetails>
  );
}
