import { Container } from "../../../ui_elements/CommonStyledElements";
import FieldCard from "./FarmCard";
import { FarmCardContainerProps } from "./farmCardContainer.static";
import { FarmCardsContainerWrapper } from "./farmCardContainer.styles";

const FarmCardsContainer = ({ farms }:FarmCardContainerProps) => {
    return (
      <Container>
          <FarmCardsContainerWrapper>
          {farms.map((farm) => (
            <FieldCard key={farm.id} farm={farm} />
          ))}
      </FarmCardsContainerWrapper>
        </Container>
    );
  };
  
  export default FarmCardsContainer;