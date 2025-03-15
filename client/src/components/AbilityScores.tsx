import { Box } from "@mui/material";
import { Ability } from "./Ability";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";

interface IAbilityScores {
  data: [AbilityData[], QualityData[], TableData[]]
}
export const AbilityScores = (props: IAbilityScores) => {
  const [abilities, _q, _t] = props.data;

  return (
    <Box>
      {abilities.map(ability =>
        <Box key={ability.name}  sx={{display: "flex", placeItems: "center"}}>
          <Ability abilityData={ability} showMod={true}></Ability>
        </Box>)}
    </Box>
  );
};
