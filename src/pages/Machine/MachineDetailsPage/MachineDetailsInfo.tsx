import DetailBullet from "../../../components/bullets/detail_bullet/DetailBullet";
import soilIcon from "../../../assets/icons/location.png";
import farmIcon from "../../../assets/icons/farm.png";
import { MachineDetailsInterface } from "./static/machineDetails.static";

const MachineDetailsInfo = ({ brand, model ,farmName }: MachineDetailsInterface) => {
  return (
    <div>
      <DetailBullet icon={soilIcon} value={brand} />
      <DetailBullet icon={soilIcon} value={model} />
      <DetailBullet icon={farmIcon} value={farmName} />
    </div>
  );
};

export default MachineDetailsInfo;
