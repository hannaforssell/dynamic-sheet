import { useState } from "react";
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    Dialog,
    DialogTitle,
    Grid2,
    DialogContent,
    SelectChangeEvent,
    Stack,
    DialogActions,
    FormControlLabel,
    Checkbox,
    Box
} from "@mui/material";
import { KnownSpell } from "../../models/characterSheet/KnownSpell";
import { SpellSchool } from "../../models/characterSheet/SpellSchool";
import { Effect } from "../../models/characterSheet/Effect";
import { EffectType } from "../../models/characterSheet/EffectType";
import { WebService } from "../../services/webService";
import { MapFromPFSRD } from "../../mappers/spellMapper";
import { PreparedSpell } from "../../models/characterSheet/PreparedSpell";

interface ISpellDialog {
    spell: KnownSpell | PreparedSpell;
    open: boolean;
    onClose: () => void;
    onSave: (updatedSpell: KnownSpell, originalSpell: KnownSpell) => void;
}

const webService = new WebService();

export const SpellDialog = (props: ISpellDialog) => {
    const [editedSpell, setEditedSpell] = useState(props.spell);

    const handleSimpleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditedSpell((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedSpell((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    };

    const handleComponentChange = (e: SelectChangeEvent) => {
        setEditedSpell({ ...editedSpell, [e.target.name]: e.target.value });
    };

    const importSpell = async () => {
        if (!editedSpell.infoUrl.startsWith("https://www.d20pfsrd")) {
            console.error("Can only import spells from https://www.d20pfsrd");
        }

        const html = await webService.get(editedSpell.infoUrl);
        if (!html) {
            console.error("Error getting html from:" + editedSpell.infoUrl);
            return;
        }
        const newSpell = MapFromPFSRD(html);
        if (!newSpell) {
            return;
        }

        setEditedSpell((prev) => ({ ...newSpell, infoUrl: prev.infoUrl, effects: prev.effects }));
    };

    const preparedSpell = "cast" in editedSpell ? (editedSpell as PreparedSpell) : null;
    return (
        <Dialog open={props.open} onClose={props.onClose} fullWidth maxWidth="lg">
            <DialogTitle>Edit Spell</DialogTitle>
            <DialogContent dividers>
                <Grid2 container spacing={3}>
                    <Grid2 size={6}>
                        <TextField label="Name" name="name" value={editedSpell.name} onChange={handleSimpleChange} fullWidth margin="dense" />
                        <TextField label="Url" name="infoUrl" value={editedSpell.infoUrl} onChange={handleSimpleChange} fullWidth margin="dense" />

                        <FormControl fullWidth margin="dense">
                            <InputLabel>School</InputLabel>
                            <Select label="School" name="school" value={editedSpell.school} onChange={handleComponentChange}>
                                {Object.values(SpellSchool).map((type) => (
                                    <MenuItem key={type} value={type}>
                                        {type}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField label="Level" name="level" type="number" value={editedSpell.level} onChange={handleSimpleChange} fullWidth margin="dense" />
                        <TextField
                            label="Casting Time"
                            name="castingTime"
                            value={editedSpell.castingTime}
                            onChange={handleSimpleChange}
                            fullWidth
                            margin="dense"
                        />
                        <TextField label="Components" name="components" value={editedSpell.components} onChange={handleSimpleChange} fullWidth margin="dense" />
                        <TextField label="Range" name="range" value={editedSpell.range} onChange={handleSimpleChange} fullWidth margin="dense" />
                        <TextField label="Target" name="target" value={editedSpell.target} onChange={handleSimpleChange} fullWidth margin="dense" />
                        <TextField label="Duration" name="duration" value={editedSpell.duration} onChange={handleSimpleChange} fullWidth margin="dense" />
                        <TextField
                            label="Saving Throw"
                            name="savingThrow"
                            value={editedSpell.savingThrow}
                            onChange={handleSimpleChange}
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label="Spell Resistance"
                            name="spellResistance"
                            value={editedSpell.spellResistance}
                            onChange={handleSimpleChange}
                            fullWidth
                            margin="dense"
                        />
                    </Grid2>
                    <Grid2 size={6}>
                        {preparedSpell && (
                            <Box display="flex" flexDirection="row" justifyContent="center">
                                <FormControlLabel
                                    control={<Checkbox name="cast" checked={preparedSpell.cast} onChange={handleCheckboxChange} />}
                                    label="Cast"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="alwaysCast" checked={preparedSpell.alwaysCast} onChange={handleCheckboxChange} />}
                                    label="Always Cast"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="active" checked={preparedSpell.active} onChange={handleCheckboxChange} />}
                                    label="Active"
                                />
                            </Box>
                        )}
                        <Stack>
                            <TextField
                                label="Original Text"
                                name="originalText"
                                value={editedSpell.originalText}
                                onChange={handleSimpleChange}
                                fullWidth
                                multiline
                                margin="dense"
                                rows={30}
                            />
                        </Stack>
                    </Grid2>
                </Grid2>
            </DialogContent>

            <DialogActions>
                <Button onClick={importSpell} color="primary" sx={{ alignSelft: "left" }}>
                    Import
                </Button>
                <Button onClick={() => navigator.clipboard.writeText(JSON.stringify(editedSpell))} color="primary" sx={{ alignSelft: "left" }}>
                    Export
                </Button>
                <Button
                    onClick={() => {
                        props.spell.effects.push(new Effect("New Effect", true, 0, EffectType.Base, ""));
                    }}
                    color="primary"
                    sx={{ alignSelft: "left" }}
                >
                    Add Effect
                </Button>
                <div style={{ flex: "1 0 0" }} />
                <Button
                    onClick={() => {
                        props.onClose();
                        props.onSave(editedSpell, props.spell);
                    }}
                    color="primary"
                    variant="contained"
                >
                    Save
                </Button>
                <Button onClick={props.onClose} color="secondary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};
