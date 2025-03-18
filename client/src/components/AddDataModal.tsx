import { useState } from "react";
import { IFormData } from "../models/IFormData";
import { AddNewModal } from "../styles/styled-components/AddNewModal";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { PropertyType } from "../models/PropertyType";
import { DataGroupType } from "../models/characterSheet/DataGroupType";
import { Box, Button, FormControl, FormGroup, InputLabel, MenuItem, Modal, Select, SxProps, TextField, Theme, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { EffectType } from "../models/characterSheet/EffectType";
import { defaultStyle } from "../helpers/stylingHelper";
import { AbilityData } from "../models/characterSheet/AbilityData";

interface IAddDataModalData {
  characterSheet: ICharacterSheet;
  setCharacterSheet: (characterSheet: ICharacterSheet) => void;
  open: boolean,
  setOpen: (open: boolean) => void
}

const dataGroups = Object.keys(DataGroupType)
const propertyTypes = Object.keys(PropertyType)

const emptyForm = {
  name: "",
  group: null,
  propertyType: null,
};

const boxStyle: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#242424',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const inputFieldStyle: SxProps<Theme> = {
  ...defaultStyle,
  width: 300,
  input: { color: "rgba(255, 255, 255, 0.87)", '&:Mui-TextField': { brandBorderColor: "rgba(255, 255, 255, 0.87)" } },
  fontSize: "14px",
  color: "red"
};

const menuItemStyle: SxProps<Theme> = {
  ...defaultStyle,
  backgroundColor: "#242424"
};

export const AddDataModal = (props: IAddDataModalData) => {
  const [formData, setFormData] = useState<IFormData>(emptyForm);


  const onSubmit = () => {
    if(!formData.group || !formData.name || !formData.propertyType) {
      return;
    }

    switch (formData.propertyType) {
      case PropertyType.Ability:
        props.characterSheet.abilityData.set(formData.name, new AbilityData(formData.name, formData.group))
        props.setCharacterSheet({...props.characterSheet})
        break;
      case PropertyType.Item:

        break;
      case PropertyType.Quality:

        break;

      default:
        break;
    }

    props.setOpen(false);
  }

  return <Modal
    open={props.open}
    onClose={() => props.setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <>
      <Box sx={boxStyle}>
        <FormGroup>
          <FormControl fullWidth>
            <TextField
              helperText={"Name"}
              variant="filled"
              value={formData.name}
              onChange={(event) => {
                setFormData({ ...formData, name: event.target.value as string })
              }}
              sx={inputFieldStyle}
              slotProps={{ formHelperText: { sx: defaultStyle }, htmlInput: { sx: inputFieldStyle } }}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel sx={defaultStyle} id="data-group-type-select-label">Group</InputLabel>
            <Select sx={defaultStyle}
              labelId="data-group-type-select-label"
              value={formData.group ?? ""}
              label="Group"
              onChange={(event) => {
                setFormData({ ...formData, group: event.target.value as DataGroupType })
              }}
            >
              {dataGroups.map((key) => {
                return <MenuItem key={key} sx={menuItemStyle} value={key}>{key}</MenuItem>
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel sx={defaultStyle} id="property-types-select-label">Type</InputLabel>
            <Select sx={defaultStyle}
              labelId="property-types-select-label"
              label="Type"
              value={formData.propertyType ?? ""}
              onChange={(event) => {
                setFormData({ ...formData, propertyType: event.target.value as PropertyType })
              }}
            >
              {propertyTypes.map((key) => {
                return <MenuItem key={key} sx={menuItemStyle} value={key}>{key}</MenuItem>
              })}
            </Select>
          </FormControl>
          <Box>
            <Button sx={defaultStyle} onClick={onSubmit} >Submit</Button>
            <Button sx={defaultStyle} onClick={() => props.setOpen(false)}>Cancel</Button>
          </Box>
        </FormGroup>
        {/* <InputLabel sx={defaultStyle} id="select-label">Group</InputLabel> */}

      </Box>
    </>
  </Modal>
};
