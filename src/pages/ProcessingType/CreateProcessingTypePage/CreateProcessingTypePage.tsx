import {
    PageTitle,
    TitleImage,
  } from "../../../ui_elements/CommonStyledElements";
  import processingTypeIcon from "../../../assets/icons/processing.png";
  import { useNavigate } from "react-router-dom";
import { createProcessingType } from "../../../services/processingTypeService";
import CreateProcessingTypeForm from "../../../components/forms/ProcessingType/CreateProcessingTypeForm";
  export default function CreateProcessingTypePage() {
    const title = "Fill in the info to create a new processing type";
    const navigate = useNavigate();
    const handleCreateProcessingType = async (formData: { name: string}) => {
      try {
        const createdProcessingType = await createProcessingType(
          formData.name,

        );
        console.log(createdProcessingType);
        
        navigate(`/processing-type`);
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div>
        <PageTitle>
          <TitleImage src={processingTypeIcon} alt="ProcessingType Icon" />
          {title}
        </PageTitle>
        <CreateProcessingTypeForm onSubmit={handleCreateProcessingType} />
      </div>
    );
  }