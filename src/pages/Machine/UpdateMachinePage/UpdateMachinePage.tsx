import { useParams } from "react-router-dom";
import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import machineIcon from "../../../assets/icons/machine.png";
import UpdateMachineForm from "../../../components/forms/Machine/Update/UpdateMachineForm";
import { useEffect, useState } from "react";
import useUpdateMachine from "../../../hooks/Machine/UseUpdateMachine";
import { fetchMachineDetails } from "../../../services/machineService";
import { Machine } from "../../../static/types/types";

export default function UpdateMachinePage() {
  const title = "Change registration number of machine if needed";
  const { machineId } = useParams();
  const { updateMachine } = useUpdateMachine();
  const [machine, setMachine] = useState(null);

  useEffect(() => {
    const fetchMachine = async () => {
      try {
        const machineData = await fetchMachineDetails(machineId);
        setMachine(machineData);
      } catch (error) {
        console.error("Error fetching machine details:", error);
      }
    };

    fetchMachine();
  }, [machineId]);

  const handleSubmit = async (formData: Partial<Machine>) => {
    try {
      if (machineId) {
        updateMachine({ machineId, updatedData: formData });
      } else throw new Error("No machine Id provided")
    } catch (error) {
      console.error("Error updating machine:", error);
    }
  };

  return (
    <div>
      <PageTitle>
        <TitleImage src={machineIcon} alt="Machine Icon" />
        {title}
      </PageTitle>
      {machine && (
        <UpdateMachineForm machine={machine} onSubmit={handleSubmit} />
      )}
    </div>
  );
}
