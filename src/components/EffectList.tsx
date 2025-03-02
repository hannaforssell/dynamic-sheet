import { useState } from "react";
import { Effect } from "../models/Effect";
import { Box, Button, Checkbox, FormGroup, List, ListItemButton, ListItemText, MenuItem, TextField } from "@mui/material";
import { EffectType } from "../models/EffectType";
import { memCopy } from "../helpers/memCopy";

const effectTypes = Object.values(EffectType)

interface IEffectListProps {
  effects: Effect[],
  applyEffects(): void
}

export const EffectList = (props: IEffectListProps) => {
  const [listIndex, setListIndex] = useState(-1);
  const [activeEffect, setActiveEffect] = useState<Effect | null>(null);
  const [originalEffect, setOriginalEffect] = useState<Effect | null>(null);

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setListIndex(index);
    setOriginalEffect(props.effects[index])
    setActiveEffect({...props.effects[index]})
  };

  const onSave = () => {
    if(!originalEffect || !activeEffect) {
      return;
    }

    memCopy(originalEffect, activeEffect);
    
    props.applyEffects();
  };

  return (
    <><Box sx={{ width: '100%', maxWidth: 360 }}>
      <List component="nav" aria-label="main mailbox folders" sx={{
        minHeight: "30vh",
        maxHeight: "30vh",
        overflow: "auto"
      }}>
        {props.effects.map((e, i) =>
          <ListItemButton
            key={i}
            selected={listIndex === i}
            onClick={(event) => handleListItemClick(event, i)}
          >
            <ListItemText primary={e.name} />
          </ListItemButton>
        )}
      </List>
    </Box>
    {activeEffect && (<FormGroup>
        <Box>
          <Checkbox checked={activeEffect.enabled} onChange={(e) => { activeEffect.enabled = e.target.checked }} />
          <TextField label="Name" variant="outlined" value={activeEffect.name} onChange={(e) => { setActiveEffect({...activeEffect, name: e.target.value}) }} />
          <TextField label="Order" type="number" value={activeEffect.order} onChange={(e) => { setActiveEffect({...activeEffect, order: parseInt(e.target.value)}) }} />
          <TextField select label="Type" value={activeEffect.type} onChange={(e) => { setActiveEffect({...activeEffect, type: EffectType[e.target.value as keyof typeof EffectType]})}}>
            {effectTypes.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <TextField sx={{ minWidth: "40vw" }}
          label="Effect"
          multiline
          rows={8}
          value={activeEffect.exec}
          onChange={(e) => { setActiveEffect({...activeEffect, exec: e.target.value}) }}
        />
        <Button
          component="label"
          variant="contained"
          tabIndex={-1}
          onClick={onSave}
        >
          Save
        </Button>
      </FormGroup>)}
      
    </>)
};
