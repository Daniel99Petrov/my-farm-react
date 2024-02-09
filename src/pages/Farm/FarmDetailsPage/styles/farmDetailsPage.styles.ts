import styled from "styled-components";



interface ToggleButtonProps {
  isActive?: boolean;
}

export const ToggleButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 80px auto 30px;
  align-items: center;
  justify-content: center;
`;

export const ToggleButton = styled.button<ToggleButtonProps>`

  ${({ isActive }) =>
    isActive &&
    `
    font-weight: bold;
  `}
`;
