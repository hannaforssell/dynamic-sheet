import { Box } from "@mui/material";
import { ISheetData } from "../models/ISheetData";
import { Quality } from "./Quality";
import { groupData } from "../helpers/dataGrouper";
import { Ability } from "./Ability";
import { TableDisplay } from "./TableDisplay";

const groupName = "Experience";

interface IExperienceInfo {
  sheetData: ISheetData;
}

export const ExperienceInfo = (props: IExperienceInfo) => {
  const [abilities, qualities, tables] = groupData(props.sheetData, groupName)

  return (
    <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 2 }}>
      {abilities.map(ability => <Box key={ability.name}><Ability key={ability.name} abilityData={ability}></Ability></Box>)}
      {qualities.map(quality => <Box key={quality.name}><Quality key={quality.name} qualityData={quality}></Quality></Box>)}
      {tables.map(table => <Box key={table.name}><TableDisplay key={table.name} tableData={table}/></Box>)}
    </Box>
  );
};
