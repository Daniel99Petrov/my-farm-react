import { useParams } from "react-router-dom";
import useUpdateFarm from "../../../hooks/Farm/UseUpdateFarm";
import { useEffect, useState } from "react";
import { fetchFarmDetails } from "../../../services/farmService";
import { Farm } from "../../../static/types/types";
import { PageTitle, TitleImage } from "../../../ui_elements/CommonStyledElements";
import farmIcon from "../../../assets/icons/farm.png"
import UpdateFarmForm from "../../../components/forms/Farm/Update/UpdateFarmForm";

export default function UpdateFarmPage() {
    const title = "Update Farm";
    const { farmId } = useParams();
    const { updateFarm } = useUpdateFarm();
    const [farm, setFarm] = useState(null);
  
    useEffect(() => {
      const fetchFarm = async () => {
        try {
          const farmData = await fetchFarmDetails(farmId);
          setFarm(farmData);
        } catch (error) {
          console.error("Error fetching farm details:", error);
        }
      };
  
      fetchFarm();
    }, [farmId]);
  
    const handleSubmit = async (formData: Partial<Farm>) => {
      try {
        if (farmId) {
          updateFarm({ farmId, updatedData: formData });
        } else throw new Error("No farm Id provided")
      } catch (error) {
        console.error("Error updating farm:", error);
      }
    };
  
    return (
      <div>
        <PageTitle>
          <TitleImage src={farmIcon} alt="Farm Icon" />
          {title}
        </PageTitle>
        {farm && (
          <UpdateFarmForm farm={farm} onSubmit={handleSubmit} />
        )}
      </div>
    );
  }