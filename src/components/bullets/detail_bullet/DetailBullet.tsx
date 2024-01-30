import { StyledDetailBullet } from "./detailBullet.styles";

const DetailBullet = ({ icon, value }) => {
  return (
    <StyledDetailBullet>
      {icon && <img src={icon} alt="Icon" />} <span>{value}</span>
    </StyledDetailBullet>
  );
};

export default DetailBullet;
