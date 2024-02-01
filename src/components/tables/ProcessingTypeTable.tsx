import { ProcessingType } from "../../types/types";
import UniversalTable from "./UniversalTable";

interface ProcessingTypeTableProps {
    processingTypes: ProcessingType[];
  }

const ProcessingTypeTable: React.FC<ProcessingTypeTableProps> = ({ processingTypes }) => {

  const columns = [
    { key: "name", header: "Name" },
    //   { key: "variety", header: "Variety" },
    //   { key: "quantity", header: "Quantity" },
    // Add more columns as needed
  ];

  const handleRowClick = (processingTypeId: string) => {
    // Handle row click action, e.g., navigate to crop details
    console.log(`Clicked on processing type with ID: ${processingTypeId}`);
  };

  return (
    <UniversalTable
      data={processingTypes}
      columns={columns}
      onRowClick={handleRowClick}
    />
  );
};

export default ProcessingTypeTable;
