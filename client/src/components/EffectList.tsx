import { useState } from "react";
import { Effect } from "../models/characterSheet/Effect";
import { Box, Button, Checkbox, FormGroup, List, ListItemButton, ListItemText, MenuItem, TextField } from "@mui/material";
import { EffectType } from "../models/characterSheet/EffectType";
import { memCopy } from "../helpers/memCopy";

const effectTypes = Object.values(EffectType);

interface IEffectListProps {
    effects: Effect[];
    calculate(): void;
    addEffect(effect: Effect): void;
    removeEffect(effect: Effect): void;
}

export const EffectList = (props: IEffectListProps) => {
    const [listIndex, setListIndex] = useState(-1);
    const [activeEffect, setActiveEffect] = useState<Effect | null>(null);
    const [originalEffect, setOriginalEffect] = useState<Effect | null>(null);

    const handleListItemClick = (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setListIndex(index);
        setOriginalEffect(props.effects[index]);
        setActiveEffect({ ...props.effects[index] });
    };

    const onNew = () => {
        const newEffect = new Effect("New Effect", true, originalEffect?.order ?? 0, originalEffect?.type ?? EffectType.Base, "");

        props.addEffect(newEffect);

        setActiveEffect(newEffect);
        setOriginalEffect(newEffect);
    };

    const onSave = () => {
        if (!originalEffect || !activeEffect) {
            return;
        }

        memCopy(originalEffect, activeEffect);

        props.calculate();
    };

    const onDelete = () => {
        if (!originalEffect || !activeEffect) {
            return;
        }

        props.removeEffect(originalEffect);

        setOriginalEffect(null);
        setActiveEffect(null);

        props.calculate();
    };

    return (
        <>
            <Box sx={{ width: "100%", maxWidth: 360 }}>
                <List
                    component="nav"
                    aria-label="main mailbox folders"
                    sx={{
                        minHeight: "30vh",
                        maxHeight: "30vh",
                        overflow: "auto"
                    }}
                >
                    {props.effects.map((e, i) => (
                        <ListItemButton key={i} selected={listIndex === i} onClick={(event) => handleListItemClick(event, i)}>
                            <ListItemText primary={e.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
            {activeEffect && (
                <FormGroup>
                    <Box>
                        <Checkbox
                            checked={activeEffect.enabled}
                            onChange={(e) => {
                                activeEffect.enabled = e.target.checked;
                            }}
                        />
                        <TextField
                            label="Name"
                            variant="outlined"
                            value={activeEffect.name}
                            onChange={(e) => {
                                setActiveEffect({
                                    ...activeEffect,
                                    name: e.target.value
                                });
                            }}
                        />
                        <TextField
                            label="Order"
                            type="number"
                            value={activeEffect.order}
                            onChange={(e) => {
                                setActiveEffect({
                                    ...activeEffect,
                                    order: parseInt(e.target.value)
                                });
                            }}
                        />
                        <TextField
                            select
                            label="Type"
                            value={activeEffect.type}
                            onChange={(e) => {
                                setActiveEffect({
                                    ...activeEffect,
                                    type: EffectType[e.target.value as keyof typeof EffectType]
                                });
                            }}
                        >
                            {effectTypes.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <TextField
                        sx={{ minWidth: "40vw" }}
                        label="Effect"
                        multiline
                        rows={8}
                        value={activeEffect.exec}
                        onChange={(e) => {
                            setActiveEffect({
                                ...activeEffect,
                                exec: e.target.value
                            });
                        }}
                    />
                    <Box>
                        <Button component="label" variant="contained" onClick={onNew}>
                            New
                        </Button>
                        <Button component="label" variant="contained" onClick={onSave}>
                            Save
                        </Button>
                        <Button sx={{ backgroundColor: "red" }} component="label" variant="contained" onClick={onDelete}>
                            Delete
                        </Button>
                    </Box>
                </FormGroup>
            )}
        </>
    );
};
