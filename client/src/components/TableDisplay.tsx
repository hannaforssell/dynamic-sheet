import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { TableData } from "../models/characterSheet/TableData";
import { defaultStyle } from "../helpers/stylingHelper";

interface ITableDisplayProps {
  tableData: TableData;
}

export const TableDisplay = (props: ITableDisplayProps) => {
  return (
    <TableContainer>
      <Table sx={{ ":root": { color: "red" } }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.tableData.headers.map((header, i) => (
              <TableCell key={i} sx={{ ...defaultStyle, border: 0 }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tableData.data.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0
                },
                lineHeight: 0.5
              }}
            >
              {row.map((cell, i) => (
                <TableCell
                  key={i}
                  component="th"
                  scope="row"
                  sx={{
                    ...defaultStyle,
                    fontSize: 12,
                    padding: 0.5,
                    textAlign: "center",
                    "&:first-of-type": {
                      textAlign: "left"
                    }
                  }}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
