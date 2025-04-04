import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { TableData } from "../../models/characterSheet/TableData";
import { IModFunctions } from "../../models/IModFunctions";

interface ITableDisplayProps {
    tableData: TableData;
    modFunctions: IModFunctions;
}

export const TableDisplay = (props: ITableDisplayProps) => {
    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {props.tableData.headers.map((header, i) => (
                            <TableCell key={i} sx={{ border: 0 }}>
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
