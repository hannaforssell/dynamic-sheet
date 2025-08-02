import { useEffect, useState } from "react";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { HeaderMenu } from "./HeaderMenu";
import { SearchResult } from "./SearchResult";
import { EffectsFooter } from "./EffectsFooter";
import { TabContext, TabPanel } from "@mui/lab";
import { Box, Grid2, Tab, Tabs } from "@mui/material";
import { groupData } from "../helpers/dataGrouper";
import { Hitpoints } from "./Hitpoints";
import { Defenses } from "./Defenses";
import { Misc } from "./Misc";
import * as backendService from "../services/backendService";
import { CalculatorService } from "../services/calculatorService";
import { DataGroupType } from "../models/characterSheet/DataGroupType";
import { Saves } from "./Saves";
import { defaultSheetPF, emptySheet, populateMissingProps } from "../helpers/sheetHelper";
import { AC } from "./AC";
import { IModFunctions } from "../models/IModFunctions";
import { OffenseTab } from "./tabs/OffenseTab";
import { BasicTab } from "./tabs/BasicTab";
import { SpecialAbilitiesTab } from "./tabs/SpecialAbilitiesTab";
import { FeatTab } from "./tabs/FeatTab";
import { SpellTab } from "./tabs/SpellTab";
import { EffectTab } from "./tabs/EffectTab";
import React from "react";
import { SkillTab } from "./tabs/SkillTab";

const calculatorService = new CalculatorService();

export const CharacterSheet = () => {
    const [, setLoading] = useState(false);
    const [sheetData, setSheetData] = useState<ICharacterSheet>(calculatorService.calculate(emptySheet));
    const [search, setSearch] = useState<string>("");
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [editMode, setEditMode] = useState<boolean>(false);

    const modFunctions: IModFunctions = {
        editMode: editMode,
        addAbility: (ability: AbilityData) => {
            sheetData.abilityData.set(ability.name, ability);
            setSheetData(calculatorService.calculate(sheetData));
        },
        removeAbility: (ability: AbilityData) => {
            sheetData.abilityData.delete(ability.name);
            setSheetData(calculatorService.calculate(sheetData));
        },
        replaceAbility: (oldAbility: AbilityData, newAbility: AbilityData) => {
            console.log(newAbility.name);
            sheetData.abilityData.delete(oldAbility.name);
            sheetData.abilityData.set(newAbility.name, newAbility);
            setSheetData(calculatorService.calculate(sheetData));
        },
        addQuality: (quality: QualityData) => {
            sheetData.qualityData.set(quality.name, quality);
            setSheetData(calculatorService.calculate(sheetData));
        },
        removeQuality: (quality: QualityData) => {
            sheetData.qualityData.delete(quality.name);
            setSheetData(calculatorService.calculate(sheetData));
        },
        replaceQuality: (oldQuality: QualityData, newQuality: QualityData) => {
            sheetData.qualityData.delete(oldQuality.name);
            sheetData.qualityData.set(newQuality.name, newQuality);
            setSheetData(calculatorService.calculate(sheetData));
        },
        recalc() {
            setSheetData(calculatorService.calculate(sheetData));
        }
    };

    useEffect(() => {
        setLoading(true);
        backendService
            .getCharacterSheet("67f10e1ad7969562630de25a")
            .then((x) => {
                if (x) {
                    populateMissingProps(x, defaultSheetPF);
                    setSheetData(calculatorService.calculate(x));
                }
            })
            .catch((e) => alert(`Getting data failed: ${e.message}`))
            .finally(() => {
                setLoading(false);
            });
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

    const changeProperty = (property: AbilityData | QualityData) => {
        if (property instanceof AbilityData) {
            sheetData.abilityData.set(property.name, new AbilityData(property.name, property.group, property.sortOrder));
        } else if (property instanceof QualityData) {
            sheetData.qualityData.set(property.name, new QualityData(property.name, property.group, property.originalText));
        }
    };

    const calculate = () => {
        setSheetData(calculatorService.calculate(sheetData));
    };

    return (
        <>
            <HeaderMenu characterSheet={sheetData} setCharacterSheet={setSheetData} calculate={calculate} setEditView={() => setEditMode(!editMode)} />
            <TabContext value={tabIndex}>
                <Tabs value={tabIndex} onChange={handleTabChange} sx={{ height: "5vh" }}>
                    <Tab label={"Basic"} value={0} />
                    <Tab label={"Offense"} value={1} />
                    <Tab label={"Defense"} value={2} />
                    <Tab label={"Skills"} value={3} />
                    <Tab label={"Special Abilities"} value={4} />
                    <Tab label={"Feats"} value={5} />
                    <Tab label={"Spells"} value={6} />
                    <Tab label={"Items"} value={7} />
                    <Tab label={"Effects"} value={8} />
                    <Tab label={"Misc"} value={9} />
                    {search && (
                        <Tab label={`Search result: ${search}`} value={10} autoFocus={false} onFocus={() => document.getElementById("searchBar")?.focus()} />
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
                    <BasicTab
                        topInfoData={groupData(sheetData, DataGroupType.TopInfo)}
                        abilityScoreData={groupData(sheetData, DataGroupType.AbilityScores)}
                        experienceData={groupData(sheetData, DataGroupType.Experience)}
                        imageLink={sheetData.imageLink}
                        modFunctions={modFunctions}
                    ></BasicTab>
                </TabPanel>
                <TabPanel value={1}>
                    <OffenseTab
                        toHitData={groupData(sheetData, DataGroupType.ToHit)}
                        casterLevelData={groupData(sheetData, DataGroupType.CasterLevel)}
                        mobilityData={groupData(sheetData, DataGroupType.Mobility)}
                        modFunctions={modFunctions}
                    ></OffenseTab>
                </TabPanel>
                <TabPanel value={2}>
                    <Grid2 container sx={{ placeItems: "center", alignSelf: "center" }}>
                        <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}>
                            <Box sx={{ gap: "20px", display: "flex", flexDirection: "column" }}>
                                <Hitpoints data={groupData(sheetData, DataGroupType.HitPoints)} modFunctions={modFunctions}></Hitpoints>
                                <Saves data={groupData(sheetData, DataGroupType.Saves)} modFunctions={modFunctions}></Saves>
                                <AC data={groupData(sheetData, DataGroupType.AC)} modFunctions={modFunctions}></AC>
                            </Box>
                        </Grid2>
                        <Grid2 size={5} sx={{ display: "flex", justifyContent: "center" }}>
                            <Defenses data={groupData(sheetData, DataGroupType.Defense)} modFunctions={modFunctions}></Defenses>
                        </Grid2>
                        <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}></Grid2>
                    </Grid2>
                    <Box sx={{ display: "flex" }}></Box>
                </TabPanel>
                <TabPanel value={3}>
                    <SkillTab skillData={groupData(sheetData, DataGroupType.Skills)} modFunctions={modFunctions} />
                </TabPanel>
                <TabPanel value={4}>
                    <SpecialAbilitiesTab modifications={sheetData.specialAbilities} modFunctions={modFunctions}></SpecialAbilitiesTab>
                </TabPanel>
                <TabPanel value={5}>
                    <FeatTab modifications={sheetData.feats} modFunctions={modFunctions}></FeatTab>
                </TabPanel>
                <TabPanel value={6}>
                    <SpellTab
                        spellsKnown={sheetData.spellsKnown}
                        spellSlotsData={groupData(sheetData, DataGroupType.SpellSlots)}
                        casterLevelData={groupData(sheetData, DataGroupType.CasterLevel)}
                        spellsPrepared={sheetData.spellsPrepared}
                        modFunctions={modFunctions}
                    ></SpellTab>
                </TabPanel>
                <TabPanel value={7}>{/* Items */}</TabPanel>
                <TabPanel value={8}>
                    <EffectTab permanentSpells={sheetData.permanentSpells} modFunctions={modFunctions}></EffectTab>
                </TabPanel>
                <TabPanel value={9}>
                    <Misc data={groupData(sheetData, DataGroupType.Misc)} modFunctions={modFunctions} />
                </TabPanel>
                {search && (
                    <TabPanel value={10}>
                        <SearchResult search={search} characterSheet={sheetData} modFunctions={modFunctions} />
                    </TabPanel>
                )}
            </TabContext>
            <EffectsFooter effects={sheetData.effects} calculate={calculate} />
        </>
    );
};
