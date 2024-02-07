import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Machine } from "../../../static/types/types";
import useMachines from "../../../hooks/Machine/UseMachines";

export const useMachinesPageLogic = () => {
  const { machines } = useMachines();
  const [filteredMachines, setFilteredMachines] = useState<
    Machine[] | undefined
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const title = `All Machines`;
  const searchPlaceholder = `Search machine..`;
  const navigate = useNavigate();
  const handleCreateField = () => {
    navigate("/machine-create");
  };

  useEffect(() => {
    if (machines) {
      setFilteredMachines(machines);
      setIsLoading(false);
    }
  }, [machines]);

  const handleSearch = (query: string) => {
    const filtered = machines?.filter(
      (machine) =>
        machine.registrationNumber
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        machine.brand.toLowerCase().includes(query.toLowerCase()) ||
        machine.model.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMachines(filtered);
  };

  return {
    machines: filteredMachines,
    handleSearch,
    isLoading,
    handleCreateField,
    title,
    searchPlaceholder,
  };
};
