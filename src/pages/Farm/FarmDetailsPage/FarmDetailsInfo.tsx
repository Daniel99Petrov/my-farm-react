import DetailBullet from "../../../components/bullets/detail_bullet/DetailBullet";
import fieldIcon from "../../../assets/icons/field.png";
import machineIcon from "../../../assets/icons/machine.png";
import locationIcon from "../../../assets/icons/location.png";
import { FarmDetailsInterface } from "./static/farmDetails.static";

const FarmDetailsInfo = ({
  longitude,
  latitude,
  fieldsCount,
  machinesCount,
}: FarmDetailsInterface) => {
  return (
    <div>
      <DetailBullet icon={fieldIcon} value={fieldsCount} />
      <DetailBullet icon={machineIcon} value={machinesCount} />
      {/* Add other details as needed */}
      <DetailBullet
        icon={locationIcon}
        value={`Lon: ${longitude}   Lat: ${latitude}`}
      />
    </div>
  );
};

export default FarmDetailsInfo;
