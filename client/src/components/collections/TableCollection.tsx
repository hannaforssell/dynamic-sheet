import { Box, SxProps, Theme } from "@mui/material";
import { IModFunctions } from "../../models/IModFunctions";
import { TableData } from "../../models/characterSheet/TableData";
import { TableDisplay } from "./TableDisplay";

interface ITableCollection {
    tables: TableData[];
    modFunctions: IModFunctions;
    sx?: SxProps<Theme>;
}

export const TableCollection = (props: ITableCollection) => {
    return (
        <Box sx={props.sx}>
            {props.tables.map((table) => (
                <Box key={table.name} sx={{ width: "100%" }}>
                    <TableDisplay key={table.name} tableData={table} modFunctions={props.modFunctions}></TableDisplay>
                </Box>
            ))}
        </Box>
    );
};
