import { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { AbilityData } from "../../models/characterSheet/AbilityData";

interface IAbilityModal {
    abilityData: AbilityData;
    open: boolean;
    onClose: () => void;
    onSave: (updatedAbilityData: AbilityData) => void;
}

export const AbilityModal = (props: IAbilityModal) => {
    const [editedData, setEditedData] = useState({ ...props.abilityData });

    const handleChange = (field: keyof AbilityData, value: any) => {
        setEditedData({ ...editedData, [field]: value });
    };

    return (
        <Modal open={props.open} onClose={props.onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Edit Ability Data
                </Typography>
                <TextField fullWidth label="Name" value={editedData.name} onChange={(e) => handleChange("name", e.target.value)} margin="normal" />
                <TextField
                    fullWidth
                    label="Display Name"
                    value={editedData.displayName}
                    onChange={(e) => handleChange("displayName", e.target.value)}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Sort Order"
                    type="number"
                    value={editedData.sortOrder}
                    onChange={(e) => handleChange("sortOrder", parseInt(e.target.value, 10))}
                    margin="normal"
                />

                <Box mt={2} display="flex" justifyContent="space-between">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            props.onClose();
                            props.onSave(editedData);
                        }}
                    >
                        Save
                    </Button>
                    <Button variant="outlined" onClick={props.onClose}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};
