import { Box } from "@mui/material";
import { Quality } from "./Quality";
import { Ability } from "./Ability";
import { TableDisplay } from "./TableDisplay";
import { AbilityData } from "../models/AbilityData";
import { QualityData } from "../models/QualityData";
import { TableData } from "../models/TableData";

interface IExperienceInfo {
  data: [AbilityData[], QualityData[], TableData[]]
}

export const ExperienceInfo = (props: IExperienceInfo) => {
  const [abilities, qualities, tables] = props.data;

  return (
    <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 2 }}>
      {abilities.map(ability => <Box key={ability.name}><Ability key={ability.name} abilityData={ability}></Ability></Box>)}
      {qualities.map(quality => <Box key={quality.name}><Quality key={quality.name} qualityData={quality}></Quality></Box>)}
      {tables.map(table => <Box key={table.name}><TableDisplay key={table.name} tableData={table}/></Box>)}
    </Box>
  );
};
