import { EffectType } from "../models/EffectType";
import { Effect } from "../models/Effect";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { EffectList } from "./EffectList";
import { TabContext, TabPanel } from "@mui/lab";

const effectTypes = Object.values(EffectType)

interface IEffectsFooterProps {
  effects: Effect[],
  applyEffects(): void
}

export const EffectsFooter = (props: IEffectsFooterProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{
      position: "sticky",
      left: 0,
      bottom: 0,
      width: "100%",
      minHeight: "40vh",
      maxHeight: "40vh",
      backgroundColor: "darkgray",
    }}>
      <TabContext value={tabIndex}>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          {(effectTypes.map((t, i) => <Tab key={i} label={t} value={i} />))}
        </Tabs>
        {(effectTypes.map((t, i) => <TabPanel key={i} value={i}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <EffectList 
              effects={props.effects.filter(e => e.type == t)}
              applyEffects={props.applyEffects}>
            </EffectList>
          </Box>
        </TabPanel>))}
      </TabContext>
    </Box>
  );
};
