import DetailBullet from "../../../components/bullets/detail_bullet/DetailBullet";
import { FieldDetailsInterface } from "./static/FieldDetailsPage.static";
import locationIcon from "../../../assets/icons/location.png";
import soilIcon from "../../../assets/icons/location.png";
import farmIcon from "../../../assets/icons/farm.png";

const FieldDetailsInfo = ({ borders, soilName,farmName }: FieldDetailsInterface) => {
  return (
    <div>
      <DetailBullet icon={soilIcon} value={soilName} />
      <DetailBullet icon={farmIcon} value={farmName} />
      <DetailBullet
        icon={locationIcon}
        value={`Borders: ${borders}`}
      />
    </div>
  );
};

export default FieldDetailsInfo;
