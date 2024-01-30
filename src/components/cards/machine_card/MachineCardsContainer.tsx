import { Container } from "../../../ui_elements/CommonStyledElements";
import { FieldCardsContainerWrapper } from "../field_card/fieldCardContainer.styles";
import MachineCard from "./MachineCard";
import { MachineCardContainerProps } from "./machineCard.style";

const MachineCardsContainer = ({ machines }:MachineCardContainerProps) => {
    return (
      <Container>
          <FieldCardsContainerWrapper>
          {machines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
      </FieldCardsContainerWrapper>
        </Container>
    );
  };
  
  export default MachineCardsContainer;