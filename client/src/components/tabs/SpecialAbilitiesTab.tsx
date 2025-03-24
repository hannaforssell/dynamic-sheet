import { Box } from "@mui/material";
import { IModFunctions } from "../../models/IModFunctions";
import { SpecialAbility } from "../../models/characterSheet/SpecialAbility";
import { SpecialAbilityCard } from "../SpecialAbilityCard";
import { useState } from "react";

interface ISpecialAbilities {
    specialAbilities: SpecialAbility[];
    modFunctions: IModFunctions;
}

export const SpecialAbilities = (props: ISpecialAbilities) => {
    const [stateFlip, setStateFlip] = useState(false);

    const duplicateSpecialAbility = (specialAbility: SpecialAbility) => {
        props.specialAbilities.push({ ...specialAbility, effects: [] });
        setStateFlip(!stateFlip);
    };

    return (
        <Box>
            {props.specialAbilities.map((specialAbility) => (
                <SpecialAbilityCard
                    key={specialAbility.name}
                    specialAbility={specialAbility}
                    duplicateSpecialAbility={duplicateSpecialAbility}
                ></SpecialAbilityCard>
            ))}
        </Box>
    );
};
