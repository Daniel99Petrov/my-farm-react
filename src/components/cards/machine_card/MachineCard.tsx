import { useNavigate } from "react-router-dom";
import { MachineCardProps } from "./machineCard.static";
import { MachineImage } from "./machineCard.style";
import { StyledFieldCard } from "../field_card/fieldCard.styles";
import MachineCardDetails from "./MachineCardDetails";
import machineImg from "../../../assets/machine-placeholder.jpg"


export default function FieldCard({ machine }: MachineCardProps) {

    const navigate = useNavigate();
  
    const handleFieldClick = () => {
      navigate(`/machine/${machine.id}`);
    };
  
    return (
      <StyledFieldCard onClick={handleFieldClick}>
        <MachineImage src={machineImg} alt="Machine" />
        <MachineCardDetails machine={machine} />
      </StyledFieldCard>
    );
  }