import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`

`;

const TableHeaderCell = styled.th`

`;

const TableBody = styled.tbody`

`;

const TableRow = styled.tr`

`;

const TableCell = styled.td`

`;

const UniversalTable = ({ data, columns, onRowClick }) => {
  const handleRowClick = (rowData) => {
    onRowClick(rowData.id);
  };

  return (
    <StyledTable>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell key={column.key}>{column.header}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id} onClick={() => handleRowClick(row)}>
            {columns.map((column) => (
              <TableCell key={column.key}>{column.render ? column.render(row) : row[column.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default UniversalTable;