import styled from "styled-components";

export const StyledFarmCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  &:hover {
    background-color: #8dd76d;
    transform: scale(1.05);
  }
`;

export const FarmImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
`;
