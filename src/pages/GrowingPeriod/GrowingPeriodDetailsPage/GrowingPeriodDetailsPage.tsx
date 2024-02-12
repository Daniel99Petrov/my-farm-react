import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMachines from "../../../hooks/Machine/UseMachines";
import useProcessingTypes from "../../../hooks/ProcessingType/UseProcessingTypes";
import useCrops from "../../../hooks/Crop/UseCrops";
import {
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from "./GrowingPeriodDetailsPage.styles";
import {
  Container,
  GreenButton,
  PageMainButtonsContainer,
  PageTitle,
  RedButton,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import processingIcon from "../../../assets/icons/processing.png";
import { routes } from "../../../static/routes/routes";
import UserRoleHOC from "../../../HOCs/UserRoleHOC/UserRoleHOC";
import useDeleteGrowingPeriod from "../../../hooks/GrowingPeriod/UseDeleteGrowingPeriodByFieldId";
import { useProcessingsByGrowingPeriodId } from "../../../hooks/Processing/UseProcessingsByGrowingPeriodId";
import { useDeleteProcessingByGrowingPeriodId } from "../../../hooks/Processing/UseDeleteProcessingByGrowingPeriodId";
import useGrowingPeriodDetails from "../../../hooks/GrowingPeriod/UseGrowingPeriodDetails";

const GrowingPeriodDetailsPage = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const title = "Processings in this growing period";
  const navigate = useNavigate();
  const { growingPeriodId } = useParams();
  const { machines } = useMachines();
  const { processingTypes } = useProcessingTypes();
  const { crops } = useCrops();
  const { processings: processingList } =
    useProcessingsByGrowingPeriodId(growingPeriodId);
  const { growingPeriod } = useGrowingPeriodDetails(growingPeriodId);
  const { deleteProcessing } =
    useDeleteProcessingByGrowingPeriodId(growingPeriodId);
  const { deleteGrowingPeriod } = useDeleteGrowingPeriod();
  const handleCreateProcessing = (id: string) => {
    navigate(routes.createProcessing.replace(":growingPeriodId", id));
  };
  const handleDeleteGrowingPeriod = (id: string, fieldId: string) => {
    deleteGrowingPeriod(id);
    navigate(routes.fieldDetails.replace(":fieldId", fieldId));
  };
  const handleDeleteProcessing = (id: string) => {
    deleteProcessing(id);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = processingList?.slice(indexOfFirstItem, indexOfLastItem);

  const renderTableHeader = () => (
    <thead>
      <TableRow>
        <TableHeader>Date</TableHeader>
        <TableHeader>Machine Registration Number</TableHeader>
        <TableHeader>Crop</TableHeader>
        <TableHeader>Processing Type</TableHeader>
      </TableRow>
    </thead>
  );
  const renderTableBody = () => (
    <tbody>
      {currentItems?.map((processing) => {
        const processingType = processingTypes?.find(
          (type) => type.id === processing.processingTypeId
        );
        const machine = machines?.find(
          (machine) => machine.id === processing.machineId
        );
        const crop = crops?.find((crop) => crop.id === growingPeriod?.cropId);

        return (
          <TableRow key={processing.id}>
            <TableCell>
              {new Date(processing.date).toLocaleDateString()}
            </TableCell>
            <TableCell>{machine?.registrationNumber}</TableCell>
            <TableCell>{crop?.name}</TableCell>
            <TableCell>{processingType?.name}</TableCell>
            <TableCell>
              <RedButton onClick={() => handleDeleteProcessing(processing.id)}>
                Delete
              </RedButton>
            </TableCell>
          </TableRow>
        );
      })}
    </tbody>
  );
  return (
    <div>
      {growingPeriodId && growingPeriod && (
        <div>
          <PageTitle>
            <TitleImage src={processingIcon} alt="Processing Icon" />
            {title}
          </PageTitle>
          <UserRoleHOC>
            <PageMainButtonsContainer>
              <GreenButton
                onClick={() => handleCreateProcessing(growingPeriodId)}
              >
                Create Processing
              </GreenButton>
              <RedButton
                onClick={() =>
                  handleDeleteGrowingPeriod(
                    growingPeriodId,
                    growingPeriod?.fieldId
                  )
                }
              >
                Delete Growing Period
              </RedButton>
            </PageMainButtonsContainer>
          </UserRoleHOC>
          {processingList && (
          <Container>
            <Table>
              {renderTableHeader()}
              {renderTableBody()}
            </Table>
            {/* Pagination */}
            <div>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous Page
              </button>
              <span>Page {currentPage}</span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={indexOfLastItem >= processingList.length}
              >
                Next Page
              </button>
            </div>
          </Container>
          )}
        </div>
      )}
    </div>
  );
};
export default GrowingPeriodDetailsPage;
