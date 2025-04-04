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
import { IModFunctions } from "../models/IModFunctions";
import { Modification } from "../models/characterSheet/Modification";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import { useState } from "react";

import Sugar from "sugar";
import { ModificationRow } from "./ModificationRow";

interface IModificationCollection {
    modifications: Modification[];
    modFunctions: IModFunctions;
}

export const ModificationCollection = (props: IModificationCollection) => {
    const [filterEffects, setFilterEffects] = useState(false);
    const [bitFlip, setBitFlip] = useState(false);

    let filtered = props.modifications;
    if (filterEffects) {
        filtered = filtered.filter((sA) => sA.effects.length > 0);
    }

    const sorted = filtered.sort(
        (a, b) => a.sourceText.localeCompare(b.sourceText) || (a.levelAquired ?? 0) - (b.levelAquired ?? 0) || a.name.localeCompare(b.name)
    );

    const [open] = useState(new Array(sorted.length).fill(false));

    const setAll = (state: boolean) => {
        open.fill(state);
        setBitFlip(!bitFlip);
    };

    const duplicateModification = (modification: Modification) => {
        props.modifications.push({
            ...modification,
            effects: modification.effects.map((e) => {
                return { ...e };
            })
        });
        props.modFunctions.recalc();
        setBitFlip(!bitFlip);
        setAll(false);
    };

    const deleteModification = (modification: Modification) => {
        Sugar.Array.remove(props.modifications, (sa) => sa === modification);
        props.modFunctions.recalc();
        setBitFlip(!bitFlip);
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
                            {sorted.map((modification, i) => (
                                <ModificationRow
                                    key={i}
                                    modification={modification}
                                    open={open[i]}
                                    toggleOpen={() => {
                                        open[i] = !open[i];
                                        setBitFlip(!bitFlip);
                                    }}
                                    duplicateModification={duplicateModification}
                                    deleteModification={deleteModification}
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
