import { Box, Grid2 } from "@mui/material";
import { IModFunctions } from "../../models/IModFunctions";
import { SpecialAbility } from "../../models/characterSheet/SpecialAbility";
import { SpecialAbilityCard } from "../SpecialAbilityCard";

interface ISpecialAbilities {
    specialAbilities: SpecialAbility[];
    modFunctions: IModFunctions;
}

export const SpecialAbilities = (props: ISpecialAbilities) => {
    return (
        <Box>
            {props.specialAbilities.map((specialAbility) => (
                <SpecialAbilityCard key={specialAbility.name} specialAbility={specialAbility}></SpecialAbilityCard>
            ))}
        </Box>
    );
};
