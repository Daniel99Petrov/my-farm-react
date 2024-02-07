import { ProcessingType } from "../../static/types/types";
import UniversalTable from "./UniversalTable";

interface ProcessingTypeTableProps {
  processingTypes: ProcessingType[];
  onDeleteProcessingType: (cropId: string) => void;
}

const ProcessingTypeTable: React.FC<ProcessingTypeTableProps> = ({
  processingTypes, onDeleteProcessingType
}) => {
  const columns = [
    { key: "name", header: "Name" },
    {
      key: "actions",
      header: "Actions",
      render: (rowData: ProcessingType) => (
        <button onClick={() => onDeleteProcessingType(rowData.id)}>Delete</button>
      ),
    },
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
