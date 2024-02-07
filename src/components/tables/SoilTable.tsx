import { Soil } from "../../static/types/types";
import UniversalTable from "./UniversalTable";

interface SoilTableProps {
  soils: Soil[];
  onDeleteSoil: (soilId: string) => void;
}

const SoilTable: React.FC<SoilTableProps> = ({ soils, onDeleteSoil }) => {
  const columns = [
    { key: "name", header: "Name" },
    {
      key: "actions",
      header: "Actions",
      render: (rowData: Soil) => (
        <button onClick={() => onDeleteSoil(rowData.id)}>Delete</button>
      ),
    },
    //   { key: "variety", header: "Variety" },
    //   { key: "quantity", header: "Quantity" },
    // Add more columns as needed
  ];

  const handleRowClick = (soilId: string) => {
    // Handle row click action, e.g., navigate to crop details
    console.log(`Clicked on soil with ID: ${soilId}`);
  };

  return (
    <div>
    {soils && (
    <UniversalTable
      data={soils}
      columns={columns}
      onRowClick={handleRowClick}
    />
  )}
  </div>
  );
};

export default SoilTable;
