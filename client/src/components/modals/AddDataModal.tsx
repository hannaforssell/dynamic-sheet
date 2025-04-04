import { useState } from "react";
import { IFormData } from "../../models/IFormData";
import { ICharacterSheet } from "../../models/characterSheet/ICharacterSheet";
import { PropertyType } from "../../models/PropertyType";
import { DataGroupType } from "../../models/characterSheet/DataGroupType";
import { Box, Button, FormControl, FormGroup, InputLabel, MenuItem, Modal, Select, SxProps, TextField, Theme } from "@mui/material";
import { AbilityData } from "../../models/characterSheet/AbilityData";

interface IAddDataModalData {
    characterSheet: ICharacterSheet;
    setCharacterSheet: (characterSheet: ICharacterSheet) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const dataGroups = Object.keys(DataGroupType);
const propertyTypes = Object.keys(PropertyType);

const emptyForm = {
    name: "",
    group: null,
    propertyType: null
};

const boxStyle: SxProps<Theme> = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#242424",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};

const inputFieldStyle: SxProps<Theme> = {
    width: 300,
    input: {
        color: "rgba(255, 255, 255, 0.87)",
        "&:Mui-TextField": { brandBorderColor: "rgba(255, 255, 255, 0.87)" }
    },
    fontSize: "14px",
    color: "red"
};

const menuItemStyle: SxProps<Theme> = {
    backgroundColor: "#242424"
};

export const AddDataModal = (props: IAddDataModalData) => {
    const [formData, setFormData] = useState<IFormData>(emptyForm);

    const onSubmit = () => {
        if (!formData.group || !formData.name || !formData.propertyType) {
            return;
        }

        switch (formData.propertyType) {
            case PropertyType.Ability:
                props.characterSheet.abilityData.set(formData.name, new AbilityData(formData.name, formData.group));
                props.setCharacterSheet({ ...props.characterSheet });
                break;
            case PropertyType.Item:
                break;
            case PropertyType.Quality:
                break;

            default:
                break;
        }

        props.setOpen(false);
    };

    return (
        <Modal open={props.open} onClose={() => props.setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <>
                <Box sx={boxStyle}>
                    <FormGroup>
                        <FormControl fullWidth>
                            <TextField
                                helperText={"Name"}
                                variant="filled"
                                value={formData.name}
                                onChange={(event) => {
                                    setFormData({
                                        ...formData,
                                        name: event.target.value as string
                                    });
                                }}
                                sx={inputFieldStyle}
                                slotProps={{
                                    htmlInput: { sx: inputFieldStyle }
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="data-group-type-select-label">Group</InputLabel>
                            <Select
                                labelId="data-group-type-select-label"
                                value={formData.group ?? ""}
                                label="Group"
                                onChange={(event) => {
                                    setFormData({
                                        ...formData,
                                        group: event.target.value as DataGroupType
                                    });
                                }}
                            >
                                {dataGroups.map((key) => {
                                    return (
                                        <MenuItem key={key} sx={menuItemStyle} value={key}>
                                            {key}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="property-types-select-label">Type</InputLabel>
                            <Select
                                labelId="property-types-select-label"
                                label="Type"
                                value={formData.propertyType ?? ""}
                                onChange={(event) => {
                                    setFormData({
                                        ...formData,
                                        propertyType: event.target.value as PropertyType
                                    });
                                }}
                            >
                                {propertyTypes.map((key) => {
                                    return (
                                        <MenuItem key={key} sx={menuItemStyle} value={key}>
                                            {key}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <Box>
                            <Button onClick={onSubmit}>Submit</Button>
                            <Button onClick={() => props.setOpen(false)}>Cancel</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </>
        </Modal>
    );
};
