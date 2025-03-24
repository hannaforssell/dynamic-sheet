import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { ActionType } from "../../models/characterSheet/ActionType";
import { Effect } from "../../models/characterSheet/Effect";
import { SpecialAbility } from "../../models/characterSheet/SpecialAbility";
import { SpecialAbilitySource } from "../../models/characterSheet/SpecialAbilitySource";
import { SpecialAbilityType } from "../../models/characterSheet/SpecialAbilityType";
import { EffectType } from "../../models/characterSheet/EffectType";

interface SpecialAbilityModalProps {
    open: boolean;
    ability: SpecialAbility;
    onClose: () => void;
    onSave: (updatedAbility: SpecialAbility) => void;
}

export const SpecialAbilityModal: React.FC<SpecialAbilityModalProps> = ({ open, ability, onClose, onSave }) => {
    const [editedAbility, setEditedAbility] = useState<SpecialAbility>({ ...ability });

    const handleChange = (field: keyof SpecialAbility, value: any) => {
        setEditedAbility((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle>Edit Special Ability</DialogTitle>
            <DialogContent dividers>
                <TextField label="Name" fullWidth value={editedAbility.name} onChange={(e) => handleChange("name", e.target.value)} margin="dense" />

                <FormControl fullWidth margin="dense">
                    <InputLabel>Source</InputLabel>
                    <Select value={editedAbility.source} onChange={(e) => handleChange("source", e.target.value)} label="Source">
                        {Object.values(SpecialAbilitySource).map((source) => (
                            <MenuItem key={source} value={source}>
                                {source}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    label="Source Text"
                    fullWidth
                    value={editedAbility.sourceText}
                    onChange={(e) => handleChange("sourceText", e.target.value)}
                    margin="dense"
                />

                <FormControl fullWidth margin="dense">
                    <InputLabel>Type</InputLabel>
                    <Select value={editedAbility.type} onChange={(e) => handleChange("type", e.target.value)} label="Type">
                        {Object.values(SpecialAbilityType).map((type) => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    label="Level Acquired"
                    type="number"
                    fullWidth
                    value={editedAbility.levelAquired ?? ""}
                    onChange={(e) => handleChange("levelAquired", e.target.value ? Number(e.target.value) : null)}
                    margin="dense"
                />

                <FormControl fullWidth margin="dense">
                    <InputLabel>Activation Cost</InputLabel>
                    <Select
                        value={editedAbility.activationCost ?? ""}
                        onChange={(e) => handleChange("activationCost", e.target.value || null)}
                        label="Activation Cost"
                    >
                        <MenuItem value="">None</MenuItem>
                        {Object.values(ActionType).map((action) => (
                            <MenuItem key={action} value={action}>
                                {action}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    label="Original Text"
                    fullWidth
                    multiline
                    value={editedAbility.originalText}
                    onChange={(e) => handleChange("originalText", e.target.value)}
                    margin="dense"
                    maxRows={12}
                />
            </DialogContent>

            <DialogActions>
                <Button
                    onClick={() => {
                        editedAbility.effects.push(new Effect("New Effect", true, 100, EffectType.Base, ""));
                    }}
                    color="primary"
                    variant="contained"
                    sx={{ alignSelft: "left" }}
                >
                    Add Effect
                </Button>
                <div style={{ flex: "1 0 0" }} />
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        onClose();
                        onSave(editedAbility);
                    }}
                    color="primary"
                    variant="contained"
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};
