import { EffectType } from "../models/characterSheet/EffectType";
import { Effect } from "../models/characterSheet/Effect";
import { Box, Button, Drawer, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { EffectList } from "./EffectList";
import { TabContext, TabPanel } from "@mui/lab";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Sugar from "sugar";

const effectTypes = Object.values(EffectType);

interface IEffectsFooterProps {
    effects: Effect[];
    calculate(): void;
}

export const EffectsFooter = (props: IEffectsFooterProps) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(true);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
            return;
        }

        setDrawerOpen(!drawerOpen);
    };

    const addEffect = (effect: Effect) => {
        props.effects.push(effect);
    };

    const removeEffect = (effect: Effect) => {
        Sugar.Array.remove(props.effects, (e) => effect === e);
    };

    return (
        <>
            <Box position="fixed" bottom={0} right={0}>
                <Button onClick={toggleDrawer}>{<ArrowUpwardIcon fontSize="large" />}</Button>
            </Box>
            <Drawer anchor="bottom" open={drawerOpen} onClose={() => setDrawerOpen(false)} variant="persistent">
                <TabContext value={tabIndex}>
                    <Tabs value={tabIndex} onChange={handleTabChange}>
                        {effectTypes.map((t, i) => (
                            <Tab key={i} label={t} value={i} />
                        ))}
                    </Tabs>

                    <Button sx={{ position: "absolute", right: "0" }} onClick={toggleDrawer}>
                        {<ArrowDownwardIcon />}
                    </Button>

                    {effectTypes.map((t, i) => (
                        <TabPanel key={i} value={i}>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <EffectList
                                    effects={props.effects.filter((e) => e.type == t)}
                                    calculate={props.calculate}
                                    addEffect={addEffect}
                                    removeEffect={removeEffect}
                                ></EffectList>
                            </Box>
                        </TabPanel>
                    ))}
                </TabContext>
            </Drawer>
        </>
    );
};
