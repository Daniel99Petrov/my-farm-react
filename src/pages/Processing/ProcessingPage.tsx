import { useEffect, useState } from "react";
import {
  Crop,
  Field,
  GrowingPeriod,
  Machine,
  Processing,
  ProcessingType,
} from "../../static/types/types";
import styled from "styled-components";
import { fetchProcessings } from "../../services/processingService";
import { fetchProcessingTypes } from "../../services/processingTypeService";
import { fetchCrops } from "../../services/cropService";
import { fetchMachines } from "../../services/machineService";
import { fetchGrowingPeriods } from "../../services/growingPeriodService";
import { fetchFields } from "../../services/fieldService";
import {
  GreenButton,
  PageMainButtonsContainer,
  PageTitle,
  TitleImage,
} from "../../ui_elements/CommonStyledElements";
import processingIcon from "../../assets/icons/processing.png";
import { useNavigate } from "react-router-dom";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export default function ProcessingPage() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [processingList, setProcessingList] = useState<Processing[]>([]);

  const [processingTypeList, setProcessingTypeList] = useState<
    ProcessingType[]
  >([]);
  const [machineList, setMachineList] = useState<Machine[]>([]);
  const [fieldList, setFieldList] = useState<Field[]>([]);
  const [growingPeriodList, setGrowingPeriodList] = useState<GrowingPeriod[]>(
    []
  );
  const [cropList, setCropList] = useState<Crop[]>([]);
  const title = "All Processings";
  const navigate = useNavigate();

  const handleCreateProcessing = () => {
    navigate("/processing-create");
  };

  useEffect(() => {
    const fetchProcessingData = async () => {
      try {
        const processingsData = await fetchProcessings();

        const sortedProcessings = processingsData.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        setProcessingList(sortedProcessings);
      } catch (error) {
        console.error("Error during fetch processing data:", error);
      }
    };

    const fetchProcessingTypeData = async () => {
      try {
        const processingTypesData = await fetchProcessingTypes();
        setProcessingTypeList(processingTypesData);
      } catch (error) {
        console.error("Error during fetch processing type data:", error);
      }
    };
    const fetchCropData = async () => {
      try {
        const cropsData = await fetchCrops();
        setCropList(cropsData);
      } catch (error) {
        console.error("Error during fetch crop data:", error);
      }
    };

    const fetchMachineData = async () => {
      try {
        const machinesData = await fetchMachines();
        setMachineList(machinesData);
      } catch (error) {
        console.error("Error during fetch machine data:", error);
      }
    };

    const fetchGrowingPeriodData = async () => {
      try {
        const growingPeriodsData = await fetchGrowingPeriods();
        setGrowingPeriodList(growingPeriodsData);
      } catch (error) {
        console.error("Error during fetch growing period data:", error);
      }
    };

    const fetchFieldData = async () => {
      try {
        const fieldsData = await fetchFields();
        setFieldList(fieldsData);
      } catch (error) {
        console.error("Error during fetch field data:", error);
      }
    };

    fetchProcessingData();
    fetchProcessingTypeData();
    fetchMachineData();
    fetchFieldData();
    fetchGrowingPeriodData();
    fetchCropData();
  }, []);

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
        <TableHeader>Field</TableHeader>
      </TableRow>
    </thead>
  );

  const renderTableBody = () => (
    <tbody>
      {currentItems.map((processing) => {
        const processingType = processingTypeList.find(
          (type) => type.id === processing.processingTypeId
        );
        const machine = machineList.find(
          (machine) => machine.id === processing.machineId
        );

        const growingPeriod = growingPeriodList.find(
          (gp) => gp.id === processing.growingPeriodId
        );

        const field = fieldList.find(
          (fld) => fld.id === growingPeriod?.fieldId
        );
        const crop = cropList.find((crop) => crop.id === growingPeriod?.cropId);

        return (
          <TableRow key={processing.id}>
            <TableCell>
              {new Date(processing.date).toLocaleDateString()}
            </TableCell>
            <TableCell>{machine?.registrationNumber}</TableCell>
            <TableCell>{crop?.name}</TableCell>
            <TableCell>{processingType?.name}</TableCell>
            <TableCell>{field?.name}</TableCell>
          </TableRow>
        );
      })}
    </tbody>
  );

  return (
    <div>
      <PageTitle>
        <TitleImage src={processingIcon} alt="Processing Icon" />
        {title}
      </PageTitle>
      <PageMainButtonsContainer>
        {/* <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} /> */}
        <GreenButton onClick={handleCreateProcessing}>
          Create Processing
        </GreenButton>
      </PageMainButtonsContainer>
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
    </div>
  );
}
