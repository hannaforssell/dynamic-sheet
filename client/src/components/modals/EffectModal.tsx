import { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Checkbox,
    FormControlLabel
} from "@mui/material";
import { Effect } from "../../models/characterSheet/Effect";
import { EffectType } from "../../models/characterSheet/EffectType";

interface IEffectModal {
    open: boolean;
    effect: Effect;
    onClose: () => void;
    onSave: (updatedEffect: Effect, originalEffect: Effect) => void;
}

export const EffectModal = (props: IEffectModal) => {
    const [editedEffect, setEditedEffect] = useState<Effect>({ ...props.effect });

    const handleChange = (field: keyof Effect, value: any) => {
        setEditedEffect((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <Dialog open={props.open} onClose={props.onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edit Effect</DialogTitle>
            <DialogContent dividers>
                {/* Name */}
                <TextField fullWidth label="Name" value={editedEffect.name} onChange={(e) => handleChange("name", e.target.value)} margin="dense" />

                {/* Enabled Checkbox */}
                <FormControlLabel
                    control={<Checkbox checked={editedEffect.enabled} onChange={(e) => handleChange("enabled", e.target.checked)} />}
                    label="Enabled"
                />

                {/* Order */}
                <TextField
                    fullWidth
                    label="Order"
                    type="number"
                    value={editedEffect.order}
                    onChange={(e) => handleChange("order", Number(e.target.value))}
                    margin="dense"
                />

                {/* Type */}
                <FormControl fullWidth margin="dense">
                    <InputLabel>Effect Type</InputLabel>
                    <Select value={editedEffect.type} onChange={(e) => handleChange("type", e.target.value as EffectType)}>
                        {Object.values(EffectType).map((type) => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Exec (Execution Script) */}
                <TextField
                    fullWidth
                    label="Execution Script"
                    multiline
                    rows={19}
                    value={editedEffect.exec}
                    onChange={(e) => handleChange("exec", e.target.value)}
                    margin="dense"
                />
            </DialogContent>

            {/* Actions */}
            <DialogActions>
                <Button onClick={props.onClose} color="secondary">
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        props.onClose();
                        props.onSave(editedEffect, props.effect);
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
