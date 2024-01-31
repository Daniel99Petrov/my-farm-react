import { Container } from "../../../ui_elements/CommonStyledElements";
import FieldCard from "./FieldCard";
import { FieldCardContainerProps } from "./fieldCardContainer.static";
import { FieldCardsContainerWrapper } from "./fieldCardContainer.styles";

const FieldCardsContainer = ({ fields }: FieldCardContainerProps) => {
  return (
    <Container>
      <FieldCardsContainerWrapper>
        {fields && fields.length > 0 ? (
          fields.map((field) => <FieldCard key={field.id} field={field} />)
        ) : (
          <p>No fields available!</p>
        )}
      </FieldCardsContainerWrapper>
    </Container>
  );
};

export default FieldCardsContainer;
