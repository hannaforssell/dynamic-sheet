import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { ActionType } from "../../models/characterSheet/ActionType";
import { Effect } from "../../models/characterSheet/Effect";
import { Modification } from "../../models/characterSheet/Modification";
import { ModificationSource } from "../../models/characterSheet/ModificationSource";
import { ModificationType } from "../../models/characterSheet/ModificationType";
import { EffectType } from "../../models/characterSheet/EffectType";

interface ModificationModalProps {
    open: boolean;
    ability: Modification;
    onClose: () => void;
    onSave: (updatedAbility: Modification) => void;
}

export const ModificationModal: React.FC<ModificationModalProps> = ({ open, ability, onClose, onSave }) => {
    const [editedAbility, setEditedAbility] = useState<Modification>({ ...ability });

    const handleChange = (field: keyof Modification, value: any) => {
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
                        {Object.values(ModificationSource).map((source) => (
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
                        {Object.values(ModificationType).map((type) => (
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
                    rows={12}
                />
            </DialogContent>

            <DialogActions>
                <Button
                    onClick={() => {
                        editedAbility.effects.push(new Effect("New Effect", true, 0, EffectType.Base, ""));
                    }}
                    color="primary"
                    sx={{ alignSelft: "left" }}
                >
                    Add Effect
                </Button>
                <div style={{ flex: "1 0 0" }} />
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
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};
