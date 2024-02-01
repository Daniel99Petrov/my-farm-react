import {
    PageTitle,
    TitleImage,
  } from "../../../ui_elements/CommonStyledElements";
  import soilIcon from "../../../assets/icons/soil.png";
  import { useNavigate } from "react-router-dom";
import { createSoil } from "../../../services/soilService";
import CreateSoilForm from "../../../components/forms/Soil/CreateSoilForm";
  export default function CreateSoilPage() {
    const title = "Fill in the info to create a new soil";
    const navigate = useNavigate();
    const handleCreateSoil = async (formData: { name: string}) => {
      try {
        const createdSoil = await createSoil(
          formData.name,

        );
        console.log(createdSoil);
        
        navigate(`/soil`);
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div>
        <PageTitle>
          <TitleImage src={soilIcon} alt="soil Icon" />
          {title}
        </PageTitle>
        <CreateSoilForm onSubmit={handleCreateSoil} />
      </div>
    );
  }