import styled, { createGlobalStyle, css } from "styled-components";

export const MainHolder = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  div, input, section {
    box-sizing: border-box;
  }
`;
const BaseButton = styled.button`
  padding: 10px 15px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const GreenButton = styled(BaseButton)`
  background-color: #6a9447;

  &:hover {
    background-color: #8db76d;
  }
`;

export const RedButton = styled(BaseButton)`
  background-color: #ff0000;

  &:hover {
    background-color: #cc0000;
  }
`;

export const BigBlueButton = styled(BaseButton)`
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
  gap: 30px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  /* min-width: 300px; */
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
  background-color: aliceblue;
  margin: 50px auto 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 50px;
`;

export const MapDetailsContainer = styled.div`
  max-width: 1500px;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 20px;
  padding: 10px;
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
`;
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
