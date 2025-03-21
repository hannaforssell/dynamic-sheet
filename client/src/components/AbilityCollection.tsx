import { Box, SxProps, Theme } from "@mui/material";
import { Ability } from "./Ability";
import { AbilityData } from "../models/characterSheet/AbilityData";

interface IAbilityCollection {
    abilities: AbilityData[];
    editMode: boolean;
    removeAbility(ability: AbilityData): void;
    showMod?: boolean;
    showSign?: boolean;
    sx?: SxProps<Theme>;
}

export const AbilityCollection = (props: IAbilityCollection) => {
    let sx: SxProps<Theme>;
    if (!props.sx) {
        const maxLen = Math.max(...props.abilities.map((a) => a.displayName.length));
        const width = `${20 + (maxLen + 1) * 20}px`;
        sx = { display: "flex", flexDirection: "column", maxWidth: width, width: width };
    } else {
        sx = props.sx;
    }

    return (
        <Box sx={sx}>
            {props.abilities.map((ability) => (
                <Box key={ability.name}>
                    <Ability
                        key={ability.name}
                        abilityData={ability}
                        editMode={props.editMode}
                        removeAbility={props.removeAbility}
                        showMod={props.showMod}
                        showSign={props.showSign}
                    ></Ability>
                </Box>
            ))}
        </Box>
    );
};
