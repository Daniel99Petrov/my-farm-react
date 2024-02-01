import { Crop } from "../../types/types";
import UniversalTable from "./UniversalTable";

interface CropTableProps {
  crops: Crop[];
}

const CropTable: React.FC<CropTableProps> = ({ crops }) => {

  const columns = [
    { key: "name", header: "Name" },
    //   { key: "variety", header: "Variety" },
    //   { key: "quantity", header: "Quantity" },
    // Add more columns as needed
  ];

  const handleRowClick = (cropId: string) => {
    // Handle row click action, e.g., navigate to crop details
    console.log(`Clicked on crop with ID: ${cropId}`);
  };

  return (
    <UniversalTable
      data={crops}
      columns={columns}
      onRowClick={handleRowClick}
    />
  );
};

export default CropTable;
