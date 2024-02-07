import { Container } from "../../../ui_elements/CommonStyledElements";
import MachineCard from "./MachineCard";
import {
  MachineCardContainerProps,
  MachineCardsContainerWrapper,
} from "./MachineCard.style";

const MachineCardsContainer = ({ machines }: MachineCardContainerProps) => {
  return (
    <Container>
      <MachineCardsContainerWrapper>
        {machines && machines.length > 0 ? (
          machines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))
        ) : (
          <p>No machines available!</p>
        )}
      </MachineCardsContainerWrapper>
    </Container>
  );
};

export default MachineCardsContainer;
