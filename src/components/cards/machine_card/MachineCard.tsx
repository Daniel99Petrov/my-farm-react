import { useNavigate } from "react-router-dom";
import { MachineCardProps } from "./MachineCard.static";
import { MachineImage, StyledMachineCard } from "./MachineCard.style";
import MachineCardDetails from "./MachineCardDetails";
import machineImg from "../../../assets/machine-placeholder.jpg";

export default function MachineCard({ machine }: MachineCardProps) {
  const navigate = useNavigate();

  const handleMachineClick = () => {
    navigate(`/machine/${machine.id}`);
  };

  return (
    <StyledMachineCard onClick={handleMachineClick}>
      <MachineImage src={machineImg} alt="Machine" />
      <MachineCardDetails machine={machine} />
    </StyledMachineCard>
  );
}
