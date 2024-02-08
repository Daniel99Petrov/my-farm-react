import { useEffect, useState } from "react";
import { GrowingPeriod, Processing } from "../../../static/types/types";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProcessingsByGrowingPeriodId } from "../../../services/processingService";
import useMachines from "../../../hooks/Machine/UseMachines";
import useProcessingTypes from "../../../hooks/ProcessingType/UseProcessingTypes";
import useCrops from "../../../hooks/Crop/UseCrops";
import { Table, TableCell, TableHeader, TableRow } from "./GrowingPeriodDetailsPage.styles";
import { fetchGrowingPeriodDetails } from "../../../services/growingPeriodService";
import { Container, GreenButton, PageMainButtonsContainer, PageTitle, TitleImage } from "../../../ui_elements/CommonStyledElements";
import processingIcon from "../../../assets/icons/processing.png";
import { routes } from "../../../static/routes/routes";

const GrowingPeriodDetailsPage = () => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [processingList, setProcessingList] = useState<Processing[]>([]);
    const [growingPeriod, setGrowingPeriod] = useState<GrowingPeriod>();
    const title = "Processings in this growing period";
    const navigate = useNavigate();
    const {growingPeriodId} = useParams()
    const {machines} = useMachines();
    const {processingTypes} = useProcessingTypes();
    const {crops} = useCrops();
    const handleCreateProcessing = (id: string) => {
      navigate(routes.createProcessing.replace(":growingPeriodId", id));
    };

      
      useEffect(() => {
        const fetchProcessingData = async () => {
          try {
            const processingsData = await fetchProcessingsByGrowingPeriodId(growingPeriodId);
    
            const sortedProcessings = processingsData.sort((a, b) => {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
            setProcessingList(sortedProcessings);
          } catch (error) {
            console.error("Error during fetch processing data:", error);
          }
        };
        const loadGrowingPeriod = async () => {
            try {
              const growingPeriodData = await fetchGrowingPeriodDetails(growingPeriodId);
              setGrowingPeriod(growingPeriodData);
            } catch (error) {
              console.error("Error loading field details:", error);
            }
          };

        fetchProcessingData();
        loadGrowingPeriod();
    }, [growingPeriodId]);



    const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = processingList.slice(indexOfFirstItem, indexOfLastItem);

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
      {currentItems.map((processing) => {
        const processingType = (processingTypes)?.find(
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
          </TableRow>
        );
      })}
    </tbody>
  );
  return (
    <div>
    {growingPeriodId && ( 
      <div>
      <PageTitle>
        <TitleImage src={processingIcon} alt="Processing Icon" />
        {title}
      </PageTitle>
      <PageMainButtonsContainer>
        <GreenButton onClick={() => handleCreateProcessing(growingPeriodId)}>
          Create Processing
        </GreenButton>
      </PageMainButtonsContainer>
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
      </div>
      )}
      </div>
  );
};
export default GrowingPeriodDetailsPage;