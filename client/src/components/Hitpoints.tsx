import { Box } from "@mui/material";
import { Quality } from "./Quality";
import { Ability } from "./Ability";
import { TableDisplay } from "./TableDisplay";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";

interface IHitpoints{
  data: [AbilityData[], QualityData[], TableData[]]
  editMode: boolean;
  removeAbility(quality: AbilityData): void;
  removeQuality(quality: QualityData): void;  
}

export const Hitpoints = (props: IHitpoints) => {
  const [abilities, qualities, tables] = props.data;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "150px"}}>
      {abilities.map(ability => <Box key={ability.name}><Ability key={ability.name} abilityData={ability} editMode={props.editMode} removeAbility={props.removeAbility}></Ability></Box>)}
      {qualities.map(quality => <Box key={quality.name}><Quality key={quality.name} qualityData={quality} editMode={props.editMode} removeQuality={props.removeQuality}></Quality></Box>)}
      {tables.map(table => <Box key={table.name}><TableDisplay key={table.name} tableData={table}/></Box>)}
    </Box>
  );
};
