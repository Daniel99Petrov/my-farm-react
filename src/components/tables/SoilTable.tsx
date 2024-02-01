import { Soil } from "../../types/types";
import UniversalTable from "./UniversalTable";


interface SoilTableProps {
    soils: Soil[];
  }

const SoilTable: React.FC<SoilTableProps> = ({ soils }) => {

  const columns = [
    { key: "name", header: "Name" },
    //   { key: "variety", header: "Variety" },
    //   { key: "quantity", header: "Quantity" },
    // Add more columns as needed
  ];

  const handleRowClick = (soilId: string) => {
    // Handle row click action, e.g., navigate to crop details
    console.log(`Clicked on soil with ID: ${soilId}`);
  };

  return (
    <UniversalTable
      data={soils}
      columns={columns}
      onRowClick={handleRowClick}
    />
  );
};

export default SoilTable;
