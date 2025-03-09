import { EffectType } from "../models/EffectType";
import { Effect } from "../models/Effect";
import { Box, Button, Drawer, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { EffectList } from "./EffectList";
import { TabContext, TabPanel } from "@mui/lab";
import React from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const effectTypes = Object.values(EffectType)

interface IEffectsFooterProps {
  effects: Effect[],
  applyEffects(): void
}

export const EffectsFooter = (props: IEffectsFooterProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box sx={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        minHeight: "35px",
        maxHeight: "35px",
        backgroundColor: "rgba(255, 255, 255, 0.87)",
      }}>
        <Button sx={{ position: "absolute", right: "0" }} onClick={toggleDrawer}>{<ArrowUpwardIcon />}</Button>
      </Box>
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant="persistent"
      >

        <TabContext value={tabIndex}>
          <Tabs value={tabIndex} onChange={handleTabChange}>
            {(effectTypes.map((t, i) => <Tab key={i} label={t} value={i} />))}
          </Tabs>

          <Button sx={{ position: "absolute", right: "0" }} onClick={toggleDrawer}>{<ArrowDownwardIcon />}</Button>

          {(effectTypes.map((t, i) => <TabPanel key={i} value={i}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <EffectList
                effects={props.effects.filter(e => e.type == t)}
                applyEffects={props.applyEffects}>
              </EffectList>
            </Box>
          </TabPanel>))}
        </TabContext>

      </Drawer>
    </>
  );
};
