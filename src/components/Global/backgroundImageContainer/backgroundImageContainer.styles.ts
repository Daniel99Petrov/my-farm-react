import styled from "styled-components";
import { BackgroundImgProps } from "./backgroundImageContainer.static";

export const BackgroundImg = styled.img<BackgroundImgProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  filter: blur(4px) brightness(0.7);
`;
