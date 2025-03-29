import {
    FormControlLabel,
    FormGroup,
    Grid2,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Paper,
    Switch,
    Table,
    TableBody,
    TableContainer
} from "@mui/material";
import { IModFunctions } from "../../models/IModFunctions";
import { SpecialAbility } from "../../models/characterSheet/SpecialAbility";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import { useState } from "react";

import Sugar from "sugar";
import { SpecialAbilityRow } from "../SpecialAbilityRow";

interface ISpecialAbilities {
    specialAbilities: SpecialAbility[];
    modFunctions: IModFunctions;
}

export const SpecialAbilities = (props: ISpecialAbilities) => {
    const [filterEffects, setFilterEffects] = useState(false);

    let filtered = props.specialAbilities;
    if (filterEffects) {
        filtered = filtered.filter((sA) => sA.effects.length > 0);
    }

    const sorted = filtered.sort((a, b) => (a.levelAquired ?? 0) - (b.levelAquired ?? 0) || a.name.localeCompare(b.name));

    const [bitFlip, setBitFlip] = useState(false);
    const [open] = useState(new Array(sorted.length).fill(false));
    const [stateFlip, setStateFlip] = useState(false);

    const setAll = (state: boolean) => {
        open.fill(state);
        setBitFlip(!bitFlip);
    };

    const duplicateSpecialAbility = (specialAbility: SpecialAbility) => {
        props.specialAbilities.push({
            ...specialAbility,
            effects: specialAbility.effects.map((e) => {
                return { ...e };
            })
        });
        props.modFunctions.recalc();
        setStateFlip(!stateFlip);
        setAll(false);
    };

    const deleteSpecialAbility = (specialAbility: SpecialAbility) => {
        Sugar.Array.remove(props.specialAbilities, (sa) => sa === specialAbility);
        props.modFunctions.recalc();
        setStateFlip(!stateFlip);
        setAll(false);
    };

    const anyOpen = open.some((i) => i);

    return (
        <Grid2 container>
            <Grid2 size={2}>
                <MenuList component={Paper} sx={{ width: "80%" }}>
                    <MenuItem
                        onClick={() => {
                            open.fill(!anyOpen);
                            setBitFlip(!bitFlip);
                        }}
                    >
                        <ListItemIcon>{anyOpen ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}</ListItemIcon>
                        <ListItemText>{anyOpen ? "Collapse" : "Expand"}</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={filterEffects}
                                            onChange={(e) => {
                                                setAll(e.target.checked);
                                                setFilterEffects(e.target.checked);
                                            }}
                                        />
                                    }
                                    label="Effects"
                                />
                            </FormGroup>
                        </ListItemIcon>
                    </MenuItem>
                </MenuList>
            </Grid2>
            <Grid2 size={10}>
                <TableContainer component={Paper} sx={{ maxHeight: "80vh" }}>
                    <Table aria-label="collapsible table" size="small">
                        <TableBody>
                            {sorted.map((specialAbility, i) => (
                                <SpecialAbilityRow
                                    key={i}
                                    specialAbility={specialAbility}
                                    open={open[i]}
                                    toggleOpen={() => {
                                        open[i] = !open[i];
                                        setBitFlip(!bitFlip);
                                    }}
                                    duplicateSpecialAbility={duplicateSpecialAbility}
                                    deleteSpecialAbility={deleteSpecialAbility}
                                    modFunctions={props.modFunctions}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid2>
        </Grid2>
    );
};
