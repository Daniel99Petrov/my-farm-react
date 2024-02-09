import { StyledDetailBullet } from "./detailBullet.styles";
import { DetailBulletProps } from "./detailBullet.static";

const DetailBullet: React.FC<DetailBulletProps> = ({ icon, value }) => {
  return (
    <StyledDetailBullet>
      {icon && <img src={icon} alt="Icon" />} <span>{value}</span>
    </StyledDetailBullet>
  );
};

export default DetailBullet;