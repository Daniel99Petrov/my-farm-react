import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Machine } from "../../../types/types";
import { fetchMachines } from "../../../services/machineService";

export const useMachinesPageLogic = () => {
    const [machines, setMachines] = useState<Machine[]>([]);
    const [filteredMachines, setFilteredMachines] = useState<Machine[]>([]);
    const title = `All Machines`;
    const searchPlaceholder = `Search machine..`;
    const navigate = useNavigate();
    const handleCreateField = () => {
      navigate("/machine-create");
    };
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const machinesData = await fetchMachines();
            setMachines(machinesData);
            setFilteredMachines(machinesData);
          } catch (error) {
            console.error("Error during fetch:", error);
          }
        };
        fetchData();
      }, []);
    
      const handleSearch = (query: string) => {
        const filtered = machines.filter((machine) =>
          machine.registrationNumber.toLowerCase().includes(query.toLowerCase()) ||
          machine.brand.toLowerCase().includes(query.toLowerCase()) ||
          machine.model.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMachines(filtered);
      };
  
    return {
      machines: filteredMachines,
      handleSearch,
      handleCreateField,
      title,
      searchPlaceholder,
    };
  };