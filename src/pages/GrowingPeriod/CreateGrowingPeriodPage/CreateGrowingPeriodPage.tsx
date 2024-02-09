
import { PageTitle, TitleImage } from "../../../ui_elements/CommonStyledElements";
import fieldIcon from "../../../assets/icons/field.png";
import CreateGrowingPeriodForm from "../../../components/forms/GrowingPeriod/Create/CreateGrowingPeriodForm";
import { useCreateGrowingPeriodPageLogic } from "./CreateGrowingPeriodPage.logic";

export default function CreateGrowingPeriodPage() {
  const { title, handleCreateGrowingPeriod } = useCreateGrowingPeriodPageLogic();
    
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