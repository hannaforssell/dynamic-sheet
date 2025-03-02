import { AbilityData } from "../models/AbilityData";
import { QualityData } from "../models/QualityData";
import { Ability } from "./Ability";
import { Quality } from "./Quality";
import { TableDisplay } from "./TableDisplay";
import { ISheetData } from "../models/ISheetData";
import { TableData } from "../models/TableData";
import { Box, SxProps, Theme } from "@mui/material";

interface IPropertyGroupProps {
  group: string;
  sheetData: ISheetData
  changeProperty: (property: AbilityData | QualityData) => void;
  calculate: () => void;
  editView: boolean;
  removeProperty: (property: AbilityData | QualityData) => void;
  layout: SxProps<Theme>
}

export const PropertyGroup = (props: IPropertyGroupProps) => {
  const abilities: AbilityData[] = [];
  props.sheetData.abilityData.forEach((a) => {
    if (a.group === props.group) {
      abilities.push(a);
    }
  });

  const qualities: QualityData[] = [];
  props.sheetData.qualityData.forEach((q) => {
    if (q.group === props.group) {
      qualities.push(q);
    }
  });

  const tables: TableData[] = [];
  props.sheetData.tableData.forEach((q) => {
    if (q.group === props.group) {
      tables.push(q);
    }
  });  

  return (
    <Box sx={props.layout}>
      {/* <h2 style={{ margin: "0", paddingBottom: "10px" }}>{props.group}</h2> */}
      {abilities.sort((a, b) => a.sortOrder === b.sortOrder ? a.name.localeCompare(b.name) : a.sortOrder - b.sortOrder).map((ability) => (
        <Box
          key={ability.name}
          style={{
            // display: "flex",
            // paddingRight: `${props.editView ? "0" : "16px"}`,
          }}
        >
          <Ability abilityData={ability} />
          {props.editView && (
            <button
              onClick={() => props.removeProperty(ability)}
              style={{ padding: "0 3px 3px 3px", fontSize: "12px" }}
            >
              x
            </button>
          )}
        </Box>
      ))}
      {qualities.map((quality) => (
        <Box
          key={quality.name}
          style={{
            display: "flex",
            paddingRight: `${props.editView ? "0" : "16px"}`,
          }}
        >
          <Quality
            key={quality.name}
            qualityData={quality}
          />
          {props.editView && (
            <button
              onClick={() => props.removeProperty(quality)}
              style={{ padding: "0 3px 3px 3px", fontSize: "12px" }}
            >
              x
            </button>
          )}
        </Box>
      ))}
      {tables.map((table, i) => (
          <TableDisplay
            tableData={table}
            key={i}
          />
      ))}
    </Box>
  );
};
