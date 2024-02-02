import styled, { css } from "styled-components";

export const GreenButton = styled.button`
  padding: 10px 15px;
  background-color: #8db76d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a9447;
  }
`;

export const RedButton = styled(GreenButton)`
  background-color: #ff0000;
  &:hover {
    background-color: #cc0000;
  }
`;

export const BigBlueButton = styled(GreenButton)`
  background-color: #004499;
  &:hover {
    background-color: #0044cc;
  }
`;

export const UpdateButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 10% auto;
  gap: 16px;
  cursor: pointer;
  padding: 12px 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 5px 30px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 360px) {
    max-width: 100%; 
    margin: 10% auto;
    padding: 12px;
  }
`;

export const FormItems = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;
`;

export const PageMainButtonsContainer = styled(Container)`
  margin: 50px auto 10px;
  display: flex;
justify-content: center;
/* gap: 100px; */
`;

export const MapDetailsContainer = styled.div`
max-width: 1500px;
margin: 10px auto;
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 20px;
  padding:10px;
  max-width: 1500px;
  background-color: aliceblue;
`;

export const CardIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

export const PageTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin: 20px;
font-size: 26px;
`
export const TitleImage = styled.img`
  margin-right: 8px;
  width: 40px;
  height: 40px;
`;
export const LoadingContainer = styled.div<{ $isLoading: boolean }>`
  ${({ $isLoading }) =>
    $isLoading &&
    css`
      filter: blur(5px); /* Adjust the blur intensity as needed */
    `}
`;

export const LoadingText = styled.p`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 16px;
  border-radius: 8px;
`;
