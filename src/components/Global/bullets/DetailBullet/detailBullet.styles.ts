import styled from "styled-components";

export const StyledDetailBullet = styled.li`
  display: flex;
  align-items: center;
  margin: 8px 20px;
  background-color: #e0f7fa;;
  padding: 8px;
  border-radius: 4px;
  overflow: hidden;
  img {
    margin-right: 8px;
    width: 40px;
    height: 40px; 
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;