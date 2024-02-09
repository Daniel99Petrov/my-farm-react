import DetailBullet from "../../../components/Global/bullets/DetailBullet/DetailBullet";
import { FieldDetailsInterface } from "./static/FieldDetailsPage.static";
import locationIcon from "../../../assets/icons/location.png";
import soilIcon from "../../../assets/icons/soil.png";
import farmIcon from "../../../assets/icons/farm.png";

const FieldDetailsInfo = ({
  coordinates,
  soilName,
  farmName,
}: FieldDetailsInterface) => {
  return (
    <div>
      <DetailBullet icon={soilIcon} value={soilName} />
      <DetailBullet icon={farmIcon} value={farmName} />
      <DetailBullet icon={locationIcon} value={`Borders: ${coordinates}`} />
    </div>
  );
};

export default FieldDetailsInfo;
