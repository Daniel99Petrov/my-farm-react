import styled from "styled-components";

export const TitleImage = styled.img`
  margin-right: 8px;
  width: 40px;
  height: 40px;
`;

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
  /* Your existing styles */
  /* ... */

  ${({ isActive }) =>
    isActive &&
    `
    font-weight: bold;
  `}
`;
