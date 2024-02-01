import {
    PageTitle,
    TitleImage,
  } from "../../../ui_elements/CommonStyledElements";
  import cropIcon from "../../../assets/icons/crop.png";
  import { useNavigate } from "react-router-dom";
import { createCrop } from "../../../services/cropService";
import CreateCropForm from "../../../components/forms/Crop/CreateCropForm";
  export default function CreateCropPage() {
    const title = "Fill in the info to create a new crop";
    const navigate = useNavigate();
    const handleCreateCrop = async (formData: { name: string}) => {
      try {
        const createdCrop = await createCrop(
          formData.name,

        );
        console.log(createdCrop);
        
        navigate(`/crop`);
      } catch (error) {
        console.error(error);
      }
    };
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