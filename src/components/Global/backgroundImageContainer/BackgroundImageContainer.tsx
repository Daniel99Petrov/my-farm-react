import { BackgroundImageContainerProps } from "./backgroundImageContainer.static";
import { BackgroundImg } from "./backgroundImageContainer.styles";

export const BackgroundImage: React.FC<BackgroundImageContainerProps> = ({
  imageUrl,
}) => {
  return <BackgroundImg src={imageUrl} />;
};
