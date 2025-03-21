import { useEffect, useState } from "react";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { HeaderMenu } from "./HeaderMenu";
import { PropertyGroup } from "./PropertyGroup";
import { SearchResult } from "./SearchResult";
import { Item } from "./Item";
import { ItemData } from "../models/characterSheet/ItemData";
import { EffectsFooter } from "./EffectsFooter";
import { TabContext, TabPanel } from "@mui/lab";
import { Box, Grid2, Tab, Tabs } from "@mui/material";
import { AbilityScores } from "./AbilityScores";
import { TopInfo } from "./TopInfo";
import { ExperienceInfo } from "./ExperienceInfo";
import { Portrait } from "./Portrait";
import { defaultStyle } from "../helpers/stylingHelper";
import { groupData } from "../helpers/dataGrouper";
import { Hitpoints } from "./Hitpoints";
import { Defenses } from "./Defenses";
import { Misc } from "./Misc";

import * as backendService from "../services/backendService";
import { CalculatorService } from "../services/calculatorService";
import { DataGroupType } from "../models/characterSheet/DataGroupType";
import { Saves } from "./Saves";
import { defaultSheetPF } from "../helpers/sheetHelper";
import { AC } from "./AC";

const calculatorService = new CalculatorService();

export const CharacterSheet = () => {
    const [, setLoading] = useState(false);
    const [sheetData, setSheetData] = useState<ICharacterSheet>();
    const [search, setSearch] = useState<string>("");
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [editMode, setEditMode] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        setSheetData(calculatorService.calculate(defaultSheetPF));

        // backendService
        //     .getCharacterSheet("67da834627222e5c0fd047de")
        //     .then((x) => {
        //         if (x) {
        //             setSheetData(calculatorService.calculate(x));
        //         }
        //     })
        //     .catch((e) => alert(`Getting data failed: ${e.message}`))
        //     .finally(() => {
        //         setLoading(false);
        //     });
    }, []);

    if (!sheetData) {
        return <></>;
    }

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value == "") {
            setSearch("");
            setTabIndex(0);
            return;
        }
        setSearch(e.target.value);
        setTabIndex(6);
    };

    const changeProperty = (property: AbilityData | QualityData | ItemData) => {
        if (property instanceof AbilityData) {
            sheetData.abilityData.set(property.name, new AbilityData(property.name, property.group, property.sortOrder));
        } else if (property instanceof QualityData) {
            sheetData.qualityData.set(property.name, new QualityData(property.name, property.group, property.originalText));
        } else if (property instanceof ItemData) {
            sheetData.itemData.set(
                property.name,
                new ItemData(property.name, new AbilityData(property.name, DataGroupType.Items, 0), property.location, property.weight)
            );
        }
    };

    const removeAbility = (ability: AbilityData) => {
        sheetData.abilityData.delete(ability.name);
        setSheetData({ ...sheetData });
    };

    const removeQuality = (quality: QualityData) => {
        sheetData.qualityData.delete(quality.name);
        setSheetData({ ...sheetData });
    };

    const calculate = () => {
        setSheetData(calculatorService.calculate(sheetData));
    };

    return (
        <>
            <HeaderMenu characterSheet={sheetData} setCharacterSheet={setSheetData} calculate={calculate} setEditView={() => setEditMode(!editMode)} />

            <TabContext value={tabIndex}>
                <Tabs value={tabIndex} onChange={handleTabChange}>
                    <Tab label={"Basic"} value={0} sx={defaultStyle} />
                    <Tab label={"Offense"} value={1} sx={defaultStyle} />
                    <Tab label={"Defense"} value={2} sx={defaultStyle} />
                    <Tab label={"Skills"} value={3} sx={defaultStyle} />
                    <Tab label={"Items"} value={4} sx={defaultStyle} />
                    <Tab label={"Misc"} value={5} sx={defaultStyle} />
                    {search && (
                        <Tab label={`Search result: ${search}`} value={5} autoFocus={false} onFocus={() => document.getElementById("searchBar")?.focus()} />
                    )}
                </Tabs>
                <input
                    id="searchBar"
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                    style={{
                        position: "absolute",
                        right: "100px",
                        top: "15px"
                    }}
                />
                <TabPanel value={0}>
                    <TopInfo
                        data={groupData(sheetData, DataGroupType.TopInfo)}
                        editMode={editMode}
                        removeAbility={removeAbility}
                        removeQuality={removeQuality}
                    />
                    <Grid2 container sx={{ placeItems: "center", alignSelf: "center" }}>
                        <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}>
                            <AbilityScores
                                data={groupData(sheetData, DataGroupType.AbilityScores)}
                                editMode={editMode}
                                removeAbility={removeAbility}
                                removeQuality={removeQuality}
                            />
                        </Grid2>
                        <Grid2 size={5} sx={{ display: "flex", justifyContent: "center" }}>
                            <Portrait imageLink={sheetData.imageLink} />
                        </Grid2>
                        <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}>
                            <ExperienceInfo
                                data={groupData(sheetData, DataGroupType.Experience)}
                                editMode={editMode}
                                removeAbility={removeAbility}
                                removeQuality={removeQuality}
                            />
                        </Grid2>
                    </Grid2>
                </TabPanel>
                <TabPanel value={1}></TabPanel>
                <TabPanel value={2}>
                    <Grid2 container sx={{ placeItems: "center", alignSelf: "center" }}>
                        <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}>
                            <Box sx={{ gap: "20px", display: "flex", flexDirection: "column" }}>
                                <Hitpoints
                                    data={groupData(sheetData, DataGroupType.HitPoints)}
                                    editMode={editMode}
                                    removeAbility={removeAbility}
                                    removeQuality={removeQuality}
                                ></Hitpoints>
                                <Saves
                                    data={groupData(sheetData, DataGroupType.Saves)}
                                    editMode={editMode}
                                    removeAbility={removeAbility}
                                    removeQuality={removeQuality}
                                ></Saves>
                                <AC
                                    data={groupData(sheetData, DataGroupType.AC)}
                                    editMode={editMode}
                                    removeAbility={removeAbility}
                                    removeQuality={removeQuality}
                                ></AC>
                            </Box>
                        </Grid2>
                        <Grid2 size={5} sx={{ display: "flex", justifyContent: "center" }}>
                            <Defenses
                                data={groupData(sheetData, DataGroupType.Defense)}
                                editMode={editMode}
                                removeAbility={removeAbility}
                                removeQuality={removeQuality}
                            ></Defenses>
                        </Grid2>
                        <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}></Grid2>
                    </Grid2>
                    <Box sx={{ display: "flex" }}></Box>
                </TabPanel>
                <TabPanel value={3}>
                    <PropertyGroup
                        group={DataGroupType.Skills}
                        data={groupData(sheetData, DataGroupType.Skills)}
                        editMode={false}
                        removeAbility={removeAbility}
                        removeQuality={removeQuality}
                    />
                    <label
                        style={{
                            textAlign: "left",
                            display: "grid",
                            gridTemplateColumns: "150px 180px"
                        }}
                    >
                        <span>Skillpoints spent</span>
                        <div>sum</div>
                    </label>
                </TabPanel>
                <TabPanel value={4}>
                    {sheetData.itemData &&
                        [...sheetData.itemData].map(([key, value]) => <Item key={key} item={value} editView={editMode} changeItem={changeProperty} />)}
                </TabPanel>
                <TabPanel value={5}>
                    <Misc data={groupData(sheetData, DataGroupType.Misc)} editMode={editMode} removeAbility={removeAbility} removeQuality={removeQuality} />
                </TabPanel>
                {search && (
                    <TabPanel value={6}>
                        <SearchResult
                            search={search}
                            characterSheet={sheetData}
                            editMode={editMode}
                            removeAbility={removeAbility}
                            removeQuality={removeQuality}
                        />
                    </TabPanel>
                )}
            </TabContext>
            <EffectsFooter effects={sheetData.effects} calculate={calculate} />
        </>
    );
};
