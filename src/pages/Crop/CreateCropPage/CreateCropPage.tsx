import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import cropIcon from "../../../assets/icons/crop.png";
import CreateCropForm from "../../../components/forms/Crop/CreateCropForm";
import { useCreateCropPageLogic } from "./CreateCropPage.logic";
export default function CreateCropPage() {
  const { title, handleCreateCrop } = useCreateCropPageLogic();
  return (
    <div>
      <PageTitle>
        <TitleImage src={cropIcon} alt="soil Icon" />
        {title}
      </PageTitle>
      <CreateCropForm onSubmit={handleCreateCrop} />
    </div>
  );
}
