import UserRoleHOC from "../../../HOCs/UserRoleHOC/UserRoleHOC";
import { Crop } from "../../../static/types/types";
import UniversalTable from "../UniversalTable/UniversalTable";

interface CropTableProps {
  crops: Crop[];
  onDeleteCrop: (cropId: string) => void;
}

const CropTable: React.FC<CropTableProps> = ({ crops, onDeleteCrop }) => {
  const columns = [
    { key: "name", header: "Name" },
    {
      key: "actions",
      header: "Actions",
      render: (rowData: Crop) => (
        <UserRoleHOC>
          <button onClick={() => onDeleteCrop(rowData.id)}>Delete</button>
        </UserRoleHOC>
      ),
    },
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
