import { useNavigate, useParams } from "react-router-dom";
import { PageTitle, TitleImage } from "../../../ui_elements/CommonStyledElements";
import { createGrowingPeriod } from "../../../services/growingPeriodService";
import fieldIcon from "../../../assets/icons/field.png";
import CreateGrowingPeriodForm from "../../../components/forms/GrowingPeriod/Create/CreateGrowingPeriodForm";

export default function CreateGrowingPeriodPage() {
    const title = "Fill in the info to create a new growing period";
    const navigate = useNavigate();
    const {fieldId} = useParams();
    const handleCreateGrowingPeriod = async (formData: {
      cropId: string;
      machineId: string;
      processingTypeId: string;
      date: Date;
    }) => {
      try {
        if(fieldId){
        const createdGrowingPeriod = await createGrowingPeriod(
            fieldId,
          formData.cropId,
          formData.machineId,
          formData.processingTypeId,
          formData.date,
        );
        const growingPeriodId = createdGrowingPeriod.id;
        navigate(`/growing-period/${growingPeriodId}`);
        }
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div>
        <PageTitle>
          <TitleImage src={fieldIcon} alt="Field Icon" />
          {title}
        </PageTitle>
        <CreateGrowingPeriodForm onSubmit={handleCreateGrowingPeriod} />
      </div>
    );
  }